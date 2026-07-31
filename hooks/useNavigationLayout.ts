import { menuList } from "@/lib/menuList";
import useMediaQuery from "./useMediaQuery";
import { navigationBreakpoints, navigationSlots } from "@/lib/navigationConfig";

export default function useNavigationLayout(){
    const isSmallTablet = useMediaQuery(navigationBreakpoints.smallTablet);
    const isTablet = useMediaQuery(navigationBreakpoints.tablet);
    const isLaptop = useMediaQuery(navigationBreakpoints.laptop);
    const isDesktop = useMediaQuery(navigationBreakpoints.desktop);

    let visibleSlots = navigationSlots.mobile;

    if(isSmallTablet)
        visibleSlots = navigationSlots.smallTablet;

    if(isTablet)
        visibleSlots = navigationSlots.tablet;

    if(isLaptop)
        visibleSlots = navigationSlots.laptop;

    if(isDesktop)
        visibleSlots = navigationSlots.desktop;

    const sortedMenu = [...menuList].sort(
        (a, b) => a.priority - b.priority
    );

    const visibleItems = sortedMenu.slice(0, visibleSlots);

    const overflowItems = sortedMenu.slice(visibleSlots);

    return{
        visibleSlots,
        visibleItems,
        overflowItems,
    }
}