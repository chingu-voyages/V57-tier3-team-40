import { useEffect } from "react";


const AdoptOrFosterPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-6 py-12 bg-[#FDF6EC]">
      <h1 className="text-5xl text-[#104C35] font-medium text-center mt-10 mb-18">
        Adopt or Foster
      </h1>

      <section className="mb-12">
        <h2 className="text-4xl font-medium text-[#2D5F4F] mb-6">
          Fostering Animals
        </h2>
        
        <p className="text-lg text-gray-700 mb-12 leading-relaxed">
          Fostering means temporarily caring for an animal until they find a 
          permanent home. This is usually done through animal shelters, rescues, or 
          organizations that need help placing animals in loving homes.
        </p>

        <h3 className="text-3xl font-normal text-[#2D5F4F] mb-4">
          Why Foster?
        </h3>
        
        <ul className="space-y-2 mb-12 text-lg">
          <li className="text-gray-700">
            <span className="font-bold">Helps shelters free up space</span> – Many shelters are overcrowded, and 
            fostering allows them to take in more animals.
          </li>
          <li className="text-gray-700">
            <span className="font-bold">Provides a safe and loving environment</span> – Some animals need time to 
            recover from illness, injury, or trauma before being adopted.
          </li>
          <li className="text-gray-700">
            <span className="font-bold">Socializes pets</span> – Foster families help animals get used to human 
            interaction, which makes them more adoptable.
          </li>
          <li className="text-gray-700">
            <span className="font-bold">Less commitment</span> – You get the joy of having a pet without a lifelong 
            obligation.
          </li>
        </ul>

        <h3 className="text-3xl font-normal text-[#2D5F4F] mb-4">
          Responsibilities of a Foster Parent:
        </h3>
        
        <ul className="space-y-2 mb-4 text-gray-700 text-lg">
          <li>• Provide food, shelter, and love.</li>
          <li>• Help with basic training and socialization.</li>
          <li>• Take the pet to veterinary check-ups (shelters usually cover medical costs).</li>
          <li>• Communicate with the rescue organization about the pet's progress.</li>
        </ul>
        
        <p className="text-gray-700 leading-relaxed text-lg mb-18">
          Fostering can last anywhere from a few weeks to a few months, 
          depending on the animal's needs.
        </p>
      </section>

      <section>
        <h2 className="text-4xl font-medium text-[#2D5F4F] mb-6">
          Adopting Animals
        </h2>
        
        <p className="text-gray-700 leading-relaxed text-lg mb-12">
          Adopting means making an animal a permanent part of your family. 
          When you adopt, you take full responsibility for the pet's health, well-being, and happiness.
        </p>

        <h3 className="text-3xl font-normal text-[#2D5F4F] mb-4">
          Why Adopt?
        </h3>
        
        <ul className="space-y-2 text-lg mb-12">
          <li className="text-gray-700">
            <span className="font-bold">Saves lives</span> – Millions of animals in shelters need homes, and adoption 
            reduces euthanasia rates.
          </li>
          <li className="text-gray-700">
            <span className="font-bold">Provides companionship</span> – Pets bring love, joy, and emotional support 
            to their owners.
          </li>
          <li className="text-gray-700">
            <span className="font-bold">Cost-effective</span> – Adoption fees usually include vaccinations, spaying/
            neutering, and microchipping, which can be cheaper than buying from 
            a breeder.
          </li>
          <li className="text-gray-700">
            <span className="font-bold">Breaks the cycle of pet homelessness</span> – When you adopt, you make 
            space for another rescue animal.
          </li>
        </ul>

        <h3 className="text-3xl font-normal text-[#2D5F4F] mb-4">
          Responsibilities of a Pet Owner:
        </h3>
        
        <ul className="space-y-2 text-gray-700 mb-18">
          <li>• Provide lifelong care, including food, shelter, and veterinary visits.</li>
          <li>• Train and socialize your pet.</li>
          <li>• Be financially prepared for medical expenses and emergencies.</li>
          <li>• Ensure a stable, loving home for the pet's entire life (which could be 10-20+ years).</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-normal text-[#2D5F4F] mb-8">
          Fostering vs. Adopting - Which is Right for You?
        </h2>
        
        <div className="overflow-hidden rounded-lg border-1 mb-8">
          <table className="w-full">
            <thead>
              <tr className="bg-[#08872B]">
                <th className="text-left py-4 px-6 text-white text-xl font-semibold border-r border-black">Factor</th>
                <th className="text-left py-4 px-6 text-white text-xl font-semibold border-r border-black">Fostering</th>
                <th className="text-left py-4 px-6 text-white text-xl font-semibold border-r border-black">Adopting</th>
              </tr>
            </thead>
            <tbody className="bg-[#FDF6EC]">
              <tr className="border-b-1">
                <td className="py-5 px-6 font-bold text-gray-900 text-lg border-r">
                  Commitment<br />Length
                </td>
                <td className="py-5 px-6 text-gray-900 font-medium border-r">Temporary (weeks to months)</td>
                <td className="py-5 px-6 text-gray-900 font-medium">Lifetime (10 - 20+ years)</td>
              </tr>
              <tr className="border-b-1">
                <td className="py-5 px-6 font-bold text-gray-900 text-lg border-r">
                  Financial<br />Responsibility
                </td>
                <td className="py-5 px-6 text-gray-900 font-medium border-r">Usually covered by the rescue/shelter</td>
                <td className="py-5 px-6 text-gray-900 font-medium">Owner is fully responsible</td>
              </tr>
              <tr className="border-b-1">
                <td className="py-5 px-6 font-bold text-gray-900 text-lg border-r">
                  Emotional<br />Bond
                </td>
                <td className="py-5 px-6 text-gray-900 font-medium border-r">May be difficult to say goodbye</td>
                <td className="py-5 px-6 text-gray-900 font-medium">Long-term companionship</td>
              </tr>
              <tr className="border-b-1">
                <td className="py-5 px-6 font-bold text-gray-900 text-lg border-r">
                  Helping<br />Animals
                </td>
                <td className="py-5 px-6 text-gray-900 font-medium border-r">You can foster multiple animals over time</td>
                <td className="py-5 px-6 text-gray-900 font-medium">You give one pet a forever home</td>
              </tr>
              <tr>
                <td className="py-5 px-6 font-bold text-gray-900 text-lg border-r">Space & Time</td>
                <td className="py-5 px-6 text-gray-900 font-medium border-r">More flexible</td>
                <td className="py-5 px-6 text-gray-900 font-medium">Requires stability and planning</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-lg text-gray-700 leading-relaxed mb-28">
          If you love animals but can't commit to adoption, fostering is a great way 
          to help give animals a temporary home. If you're ready for a lifelong pet 
          companion, adoption is the best choice!
        </p>
      </section>
    </div>
  );
};

export default AdoptOrFosterPage;
