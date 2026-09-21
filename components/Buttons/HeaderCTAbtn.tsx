import './headerCTAbtn.css'

type HeaderCTAbtnProp = {
    headerCTAclassName : string
}

export default function HeaderCTAbtn({
    headerCTAclassName,
} : HeaderCTAbtnProp){
    return(
        <a
            href="https://theblackbusinessassociationofmemphis.growthzoneapp.com/ap/Membership/Application/EPKm4Grw"
            aria-label="Join the Black Chamber of Memphis as a member"
            className = {headerCTAclassName}
        >
            Join BCoM
        </a>
    )
}