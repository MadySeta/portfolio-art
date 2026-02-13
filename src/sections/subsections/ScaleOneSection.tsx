import ProjectTitle from "../../components/ProjectTitle";
import SectionTitle from "../../components/SectionTitle";


export default function ScaleOneSection() {

  return (
    <>
      <div className="bg-[#010e17] p-6 rounded-2xl mb-12">
        <SectionTitle title="Echelle 1" />

        {/* Sumo */}
        <>
          <ProjectTitle title="Sumo" />
          <div className="mb-6 text-center z-2">
            Projet académique L2 : échelle 1 fait au pastel sec et crayon de couleurs sur papier kraft
          </div>
          <div className="grid grid-cols-20 grid-rows-11 gap-5 h-[85vh] w-full max-h-200">

            {/* Feet */}
            <div className="col-start-3 col-span-4 row-start-1 row-span-3 sumo-img">
              <img src="images/scale-1/sumos/sumo-feet.png"
                alt="sumo1"
                className="h-full w-full object-contain" />
            </div>

            {/* Leg */}
            <div className="col-start-7 col-span-2 row-start-1 row-span-5 sumo-img">
              <img src="images/scale-1/sumos/sumo-leg.png"
                alt="sumo1"
                className="h-full w-full object-contain" />
            </div>

            {/* Head */}
            <div className="col-start-9 col-span-3 row-start-2 row-span-3 sumo-img">
              <img src="images/scale-1/sumos/sumo-head.png"
                alt="sumo1"
                className="h-full w-full object-contain" />
            </div>

            {/* Hand */}
            <div className="col-start-9 col-span-1 row-start-5 row-span-1 sumo-img">
              <img src="images/scale-1/sumos/sumo-hand.png"
                alt="sumo1"
                className="h-full w-full object-contain" />
            </div>

            {/* Belt */}
            <div className="col-start-12 col-span-3 row-start-1 row-span-3 sumo-img">
              <img src="images/scale-1/sumos/sumo-belt.png"
                alt="sumo1"
                className="h-full w-full object-contain" />
            </div>

            {/* Draft */}
            <div className="col-start-6 col-span-4 row-start-6 row-span-6 sumo-img">
              <img src="images/scale-1/sumos/sumo-draft.png"
                alt="sumo1"
                className="h-full w-full object-contain" />
            </div>

            {/* Arm */}
            <div className="col-start-10 col-span-2 row-start-5 row-span-6 sumo-img">
              <img src="images/scale-1/sumos/sumo-arm.png"
                alt="sumo1"
                className="h-full w-full object-contain" />
            </div>

            {/* Push */}
            <div className="col-start-12 col-span-4 row-start-4 row-span-5 sumo-img">
              <img src="images/scale-1/sumos/sumo-push.png"
                alt="sumo1"
                className="h-full w-full object-contain" />
            </div>

            {/* Tits */}
            <div className="col-start-12 col-span-7 row-start-9 row-span-2 sumo-img">
              <img src="images/scale-1/sumos/sumo-tits.png"
                alt="sumo1"
                className="h-full w-full object-contain" />
            </div>

            {/* BigHand */}
            <div className="col-start-6 col-span-1 row-start-4 row-span-2 sumo-img">
              <img src="images/scale-1/sumos/sumo-bighand.png"
                alt="sumo1"
                className="h-full w-full object-contain" />
            </div>

            {/* Nihoby */}
            <div className="col-start-1 col-span-5 row-start-4 row-span-8 sumo-img">
              <img src="images/scale-1/sumos/sumo-2.jpeg"
                alt="sumo1"
                className="h-full w-full object-contain" />
            </div>

            {/* Video */}
            <div className="col-start-16 col-span-5 row-start-1 row-span-8 h-full w-full ">
              <video className="h-full w-full" autoPlay muted loop>
                <source src="videos/sumo-video.mp4" type="video/mp4" />
              </video>
            </div>

          </div>
        </>

        {/* Arnold */}
        <div className="mt-24">
          <ProjectTitle title="Arnold Schwarzenegger" />
          <div className="text-center z-2 mb-6 text-xl">
            Projet académique L1 : échelle 1 fait au fusain et pierre noire sur papier
          </div>

          <div className="flex justify-around h-[60vh] px-12.5 max-h-160">

            <img src="images/scale-1/arnolds/arnold-1.jpeg"
              alt="sumo1"
              className="h-full object-contain rounded-full" />

            <video className="h-full object-contain rounded-full" autoPlay muted loop>
              <source src="videos/arnold-video.mp4" type="video/mp4" />
            </video>

            <img src="images/scale-1/arnolds/arnold-2.jpeg"
              alt="sumo1"
              className="h-full object-contain rounded-full" />

          </div>

        </div>

      </div>



    </>
  );
}
