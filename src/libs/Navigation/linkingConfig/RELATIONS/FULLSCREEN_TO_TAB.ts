import type {ValueOf} from 'type-fest';
import BOTTOM_TABS from '@components/Navigation/BottomTabBar/BOTTOM_TABS';
import type {FullScreenName} from '@libs/Navigation/types';
import NAVIGATORS from '@src/NAVIGATORS';

const FULLSCREEN_TO_TAB: Record<FullScreenName, ValueOf<typeof BOTTOM_TABS>> = {
    [NAVIGATORS.REPORTS_SPLIT_NAVIGATOR]: BOTTOM_TABS.HOME,
    [NAVIGATORS.SEARCH_FULLSCREEN_NAVIGATOR]: BOTTOM_TABS.SEARCH,
    [NAVIGATORS.SETTINGS_SPLIT_NAVIGATOR]: BOTTOM_TABS.SETTINGS,
    [NAVIGATORS.WORKSPACE_SPLIT_NAVIGATOR]: BOTTOM_TABS.SETTINGS,
};

export default FULLSCREEN_TO_TAB;
