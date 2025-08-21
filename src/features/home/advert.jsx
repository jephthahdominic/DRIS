export default function Advert({advert}){
    return(
        <div className="h-[400px] p-0">
          <img src={`https:${advert?.fields.advertisement.fields.file.url}`} alt="Admission advert banner" width={500} height={500} className="object-cover h-full w-full rounded-[10px]"/>
        </div>
    )
}