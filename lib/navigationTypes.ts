export type NavigationSubItem = {
    name : string
    path : string
}

export type NavigationMenuItem = {
    priority : number
    name : string
    path : string
    subLink : NavigationSubItem[]
}