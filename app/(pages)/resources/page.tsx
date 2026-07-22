import ResourcesPage from "./ResourcesPage";

type ResourcesProps = {
    searchParams: Promise<{tab?: string}>
}


export default async function Resources({
    searchParams,
} : ResourcesProps ){
    const { tab } = await searchParams
    return(
        <>
            <ResourcesPage
                initialTab = { tab ?? 'insights' }
            />
        </>
    )
}