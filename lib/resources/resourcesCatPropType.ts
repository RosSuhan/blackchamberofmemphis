export type ResourcesCatPropType = {
    cat : string,
    key : string,
    filter : {
        filterCat : string, 
        key : string,
        subCatList : {
            subCat : string,
            key : string,
        }[]
    }[]
}