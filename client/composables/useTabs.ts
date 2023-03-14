import type { InjectionKey } from 'vue';

export type Tab = {
  label: string;
  hash: string;
};

type TabState = {
  label: string;
  hash: string;
  isActive: boolean;
};

type TabsState = {
  tabs: TabState[];
  active: string;
  setActive: (tabHash: string) => void;
  add: (tab: TabState) => void;
};

const TABS_SYMBOL = Symbol('TABS_SYMBOL') as InjectionKey<TabsState>;

export const useTabs = () => {
  const state = reactive<TabsState>({
    tabs: [],
    active: '',
    setActive(hash: string) {
      const tab = this.tabs.find((tab) => tab.hash === hash);
      if (!tab) return;
      this.active = tab.hash;
    },
    add(tab) {
      const alreadyAdded =
        this.tabs.findIndex((t) => t.hash === tab.hash) != -1;
      if (alreadyAdded) return;
      this.tabs.push(tab);
    },
  });

  provide(TABS_SYMBOL, state);
  return state;
};

export const useTab = (tab: Tab) => {
  const tabsState = inject(TABS_SYMBOL);

  const tabState = reactive({
    label: tab.label,
    hash: tab.hash,
    isActive: computed(() => tab.hash === tabsState?.active),
    // todo: hasError for form tabs.
  });

  onBeforeMount(() => {
    tabsState?.add(tabState);
    tabsState?.setActive(tabState.hash);
  });

  return tabState;
};
