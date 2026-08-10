'use client' 
import { useState, useSyncExternalStore } from "react"; 
import Popup from "./Popup"; 

type PopupCampaign = { 
    id: string; 
    priority: number; 
    startDate: string; 
    endDate: string; 
    image: string; 
    imageAlt: string; 
    imageWidth: number; 
    imageHeight: number; 
    title: string; 
    description: string; 
    ctaText: string; 
    ctaLink: string; 
}; 

const POPUP_STORAGE_KEY = "bcom_popup_last_shown"; 

const popupCampaigns: PopupCampaign[] = [ 
    { 
        id: "Symposium-2026", 
        priority: 3, 
        startDate: "2026-08-01", 
        endDate: "2026-10-02", 
        image: "/pop-up/BCoM-Building-Wealth-in-Our-Community-Symposium-200x300.jpg", 
        imageAlt: "BCoM Building Wealth in Our Community Symposium 2026", 
        imageWidth: 200, 
        imageHeight: 300, 
        title: "BCoM Building Wealth in Our Community Symposium 2026", 
        description: "Be part of the experience everyone will be talking about! Tickets are now available for our upcoming event, bringing together inspiring speakers, powerful conversations, and unmatched networking opportunities. Register today and secure your seat.", 
        ctaText: "Read More", 
        ctaLink: "/events/symposium", 
    }, { 
        id: "remoting", 
        priority: 1, 
        startDate: "2026-08-01", 
        endDate: "2026-08-15", 
        image: "/events/remoting3.webp", 
        imageAlt: 'remoting.work invitation to online workshop', 
        imageWidth: 200, 
        imageHeight: 300, 
        title: "Scaling Your Professional Services Firm Beyond You", 
        description: "Learn how to move from owner-operator to strategic leader and build a professional services firm that grows without depending on you for every decision. Join us virtually on Wednesday, August 19, 2026, from 6:30–7:30 PM.", 
        ctaText: "Read More", 
        ctaLink: "/events/scaling-your-professional-services-firm-beyond-you", 
    },{ 
        id: "ceoCeo", 
        priority: 2, 
        startDate: "2026-08-01", 
        endDate: "2026-08-20", 
        image: "/events/ceo-ceo-family-business.webp", 
        imageAlt: 'Invitation to the CEO to CEO conversation series',
        imageWidth: 200, 
        imageHeight: 300, 
        title: "CEO to CEO: Family Business", 
        description: 'From shared leadership to succession planning, this conversation explores what it takes to grow a business with the people you love, without losing sight of the business or the bond.', 
        ctaText: "Read More", 
        ctaLink: "/events/ceo-ceo-family-business", 
    },
]; 

const subscribe = () => {
    return () => {};
};

const getServerSnapshot = () => false;

const getClientSnapshot = () => true;

export default function PopupManager() { 

    const isClient = useSyncExternalStore(
        subscribe,
        getClientSnapshot,
        getServerSnapshot,
    );
    
    /* * This state tracks whether the popup has * been closed during the current render. */ 
    const [isDismissed, setIsDismissed] = useState(false); 
    
    /* * Don't render anything until we know we're * running in the browser. */ 
    if (!isClient || isDismissed) { return null; } 
    
    /* * Get today's date as YYYY-MM-DD. */ 
    const today = new Date(); 
    const todayString = today.getFullYear() + "-" + String(today.getMonth() + 1).padStart(2, "0") + "-" + String(today.getDate()).padStart(2, "0"); 
    
    /* * Check whether a popup has already been * shown today. */ 
    
    const lastShown = localStorage.getItem(POPUP_STORAGE_KEY); 
    
    if (lastShown === todayString) { return null; } 
    
    /* * Find currently active campaigns. * * Lower priority number = higher priority. */ 
    const activeCampaigns = popupCampaigns.filter((campaign) => { 
        return ( 
            todayString >= campaign.startDate && 
            todayString <= campaign.endDate 
        ); 
    }).sort((a, b) => a.priority - b.priority); 
    
    /* * Select the highest-priority campaign. */ 
    const activePopup = activeCampaigns[0]; 
    
    /* * No campaign is currently active. */ 
    if (!activePopup) { return null; } 
    
    const closePopup = () => { 
        /* * Get today's date. */ 
        const currentDate = new Date(); 
        const currentDateString = currentDate.getFullYear() + "-" + String(currentDate.getMonth() + 1).padStart(2, "0") + "-" + String(currentDate.getDate()).padStart(2, "0"); 
        /* * Remember that a popup was shown today. */ 
        
        localStorage.setItem( POPUP_STORAGE_KEY, currentDateString ); 
        
        /* * Hide the popup for the remainder * of this page lifecycle. */ 
        setIsDismissed(true); 
    };

    return(
        <Popup
            key={activePopup.id}
            imageSrc={activePopup.image}
            imageAlt={activePopup.imageAlt}
            imageWidth={activePopup.imageWidth}
            imageHeight={activePopup.imageHeight}
            title={activePopup.title}
            description={activePopup.description}
            ctaText={activePopup.ctaText}
            ctaLink={activePopup.ctaLink}
            onClose={closePopup}
        />
    )
}