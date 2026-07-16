type Props = {
    schema : object
}

export default function EventSchema({
    schema
}: Props) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}}
        />
    )
}