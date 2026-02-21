import ProjectTitle from "./ProjectTitle";

export default function Languages() {

  return (
    <>
      {/* Langues */}
      <div className="mt-24">
        <ProjectTitle title="Langues" />
        <div className="flex flex-wrap gap-10 justify-center items-center">
          <div>
            <img src="images/flag/french.png" alt="logo" className="w-24 h-24 object-contain" />
          </div>

          <div>
            <img src="images/flag/british.png" alt="logo" className="w-24 h-24 object-contain" />
          </div>

          <div>
            <img src="images/flag/malgachy.png" alt="logo" className="w-24 h-24 object-contain" />
          </div>
        </div>

      </div>
    </>
  );
}
