type Holiday = {
    id: string;
    eventName: string;
    sortDate: string;
    type: 'holiday';
    isFederal: true;
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

export function getUSFederalHolidays(year: number): Holiday[] {
    return[
        {
            id: 'new-years-day',
            eventName: "New Year's Day",
            sortDate: `${year}-01-01`,
            type: 'holiday',
            isFederal: true,
        },
        {
            id: 'mlk-day',
            eventName: 'Martin Luther King Jr. Day',
            sortDate: formatDate(
                getNthWeekdayOfMonth(year, 0, 1, 3) // Jan, Monday, 3rd
            ),
            type: 'holiday',
            isFederal: true,
        },
        {
            id: 'presidents-day',
            eventName: "Presidents' Day",
            sortDate: formatDate(
                getNthWeekdayOfMonth(year, 1, 1, 3)
            ),
            type: 'holiday',
            isFederal: true,
        },
        {
            id: 'memorial-day',
            eventName: "Memorial Day",
            sortDate: formatDate(
                getLastWeekdayOfMonth(year, 4, 1) // May, Monday
            ),
            type: 'holiday',
            isFederal: true,
        },
        {
            id: 'juneteenth',
            eventName: "Juneteenth",
            sortDate: `${year}-06-19`,
            type: 'holiday',
            isFederal: true,
        },
        {
            id: 'independence-day',
            eventName: 'Independence Day',
            sortDate: `${year}-07-04`,
            type: 'holiday',
            isFederal: true,
        },
        {
            id: 'labor-day',
            eventName: 'Labor Day',
            sortDate: formatDate(
                getNthWeekdayOfMonth(year, 8, 1, 1) // Sept, Monday
            ),
            type: 'holiday',
            isFederal: true,
        },
        {
            id: 'columbus-day',
            eventName: 'Columbus Day',
            sortDate: formatDate(
                getNthWeekdayOfMonth(year, 9, 1, 2)
            ),
            type: 'holiday',
            isFederal: true,
        },
        {
            id: 'veterans-day',
            eventName: 'Veterans Day',
            sortDate: `${year}-11-11`,
            type: 'holiday',
            isFederal: true,
        },
        {
            id: 'thanksgiving-day',
            eventName: "Thanksgiving Day",
            sortDate: formatDate(
                getNthWeekdayOfMonth(year, 10, 4, 4) // Nov, Thursday
            ),
            type: 'holiday',
            isFederal: true,
        },
        {
            id: 'christmas-day',
            eventName: 'Christmas Day',
            sortDate: `${year}-12-25`,
            type: 'holiday',
            isFederal: true,
        },
        {
            id: 'easter-friday',
            eventName: "Easter Friday",
            sortDate: "2026-04-03",
            type: 'holiday',
            isFederal: true,
        },
        {
            id: 'easter-saturday',
            eventName: "Easter Saturday",
            sortDate: "2026-04-04",
            type: 'holiday',
            isFederal: true,
        },
        {
            id: 'easter-sunday',
            eventName: "Easter Sunday",
            sortDate: "2026-04-05",
            type: 'holiday',
            isFederal: true,
        }
    ];
}