import AdmissionProcess from "./AdmissionProcess";
import EnrollmentDocuments from "./EnrollmentDocuments";

export default function Admission() {
  return (
    <div className="min-h-screen max-lg:h-3/4 w-full">
      <div className="h-3/4 px-8 max-sm:px-4 py-14 pt-40 bg-[rgba(31,31,31,0.8)] flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl max-sm:text-4xl text-[#FFF] font-semibold max-md:leading-normal">Join Us Today</h1>
        <p className="text-xl text-[#c8c8c8] w-[70%] max-md:w-[100%] leading-relaxed mt-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa velit, veritatis quia eum, non aliquid adipisci 
          tempora maxime reiciendis, excepturi nemo eveniet nihil fugiat atque at! Aperiam ipsam velit suscipit!
        </p>
      </div>
      <section className="px-8 max-sm:px-4 py-14 text-center flex flex-col items-center gap-4 bg-white">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl max-sm:text-3xl font-semibold section-heading">Admission Process</h2>
        </div>
        <AdmissionProcess />
      </section>
      <section className="px-8 max-sm:px-4 py-14 text-center flex flex-col items-center gap-4 bg-white">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl max-sm:text-3xl font-semibold section-heading">Required Documents</h2>
        </div>
        <EnrollmentDocuments />
      </section>
      <section className="px-8 max-sm:px-4 py-14 text-center flex flex-col items-center gap-4 bg-white">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl max-sm:text-3xl font-semibold section-heading">Frequently Asked Questions</h2>
        </div>
        
      </section>
    </div>
  )
}
