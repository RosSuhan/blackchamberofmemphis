type Holiday = {
    id: string;
    eventName: string;
    sortDate: string;
    type: 'holiday';
    isFederal: false;
};

function getNthWeekdayOfMonth(
    year: number,
    month: number,
    weekday: number,
    nth: number,
) {
    const firstDay = new Date(year, month, 1);
    const firstWeekday = 
        (7 + weekday - firstDay.getDay()) % 7;
    return new Date(
        year,
        month,
        1 + firstWeekday + 7 * (nth - 1)
    );
}

function getLastWeekdayOfMonth (
    year: number,
    month: number,
    weekday: number
) {
    const lastDay = new Date(year, month + 1, 0);
    const diff = 
        (7 + lastDay.getDay() - weekday) % 7;
    return new Date(year, month + 1, 0 - diff);
}

const formatDate = (d: Date) =>
    d.toISOString().split('T')[0];

export function getLocalHolidayIndex(year: number) : Holiday[] {
    return[
        {
            id: 'national-freedom-day',
            eventName: "National Freedom Day",
            sortDate: `${year}-02-01`,
            type: 'holiday',
            isFederal: false,
        },
        {
            id: 'georgia-day',
            eventName: 'Georgia Day',
            sortDate: `${year}-02-12`,
            type: 'holiday',
            isFederal: false,
        },
        {
            id: 'valentine-day',
            eventName: "Valentine's Day",
            sortDate: `${year}-02-14`,
            type: 'holiday',
            isFederal: false,
        },
        {
            id: 'international-womens-day',
            eventName: "International Women's Day",
            sortDate: `${year}-03-08`,
            type: 'holiday',
            isFederal: false,
        },
        {
            id: 'st-patrick-day',
            eventName: "St. Patrick's Day",
            sortDate: `${year}-03-17`,
            type: 'holiday',
            isFederal: false,
        },
        {
            id: 'memphis-in-may',
            eventName: "Memphis in May",
            sortDate: '2026-05-01',
            type: 'holiday',
            isFederal: false,
        },
        {
            id: 'mothers-day',
            eventName: "Mother's Day",
            sortDate: formatDate(
                getNthWeekdayOfMonth(year, 4, 0, 2)
            ),
            type: 'holiday',
            isFederal: false,
        },
        {
            id: 'fathers-day',
            eventName: "Father's Day",
            sortDate: formatDate(
                getNthWeekdayOfMonth(year, 5, 0, 3)
            ),
            type: 'holiday',
            isFederal: false,
        },
    ]
}