export type ResourcesCatPropType = {
    cat : string,
    key : string,
    path : string,
    filter : {
        filterCat : string, 
        key : string,
        path : string,
        subCatList : {
            subCat : string,
            key : string,
            path : string,
        }[]
    }[]
}