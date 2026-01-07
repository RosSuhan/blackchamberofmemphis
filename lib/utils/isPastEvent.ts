export function isPastEvent(sortDate: string) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const eventDate = new Date(sortDate);
    eventDate.setHours(0, 0, 0, 0);

    return eventDate < today;
}