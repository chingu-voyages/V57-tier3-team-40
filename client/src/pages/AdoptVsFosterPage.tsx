const AdoptOrFosterPage = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 bg-[#FDF6EC]">
      <h1 className="text-5xl text-[#104C35] font-medium text-center mt-10 mb-18">
        Adopt or Foster
      </h1>

      <section className="mb-12">
        <h2 className="text-4xl font-medium text-[#2D5F4F] mb-6">
          Fostering Animals
        </h2>
        
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Fostering means temporarily caring for an animal until they find a 
          permanent home. This is usually done through animal shelters, rescues, or 
          organizations that need help placing animals in loving homes.
        </p>

        <h3 className="text-3xl font-normal text-[#2D5F4F] mb-4">
          Why Foster?
        </h3>
        
        <ul className="space-y-4 mb-8 text-lg">
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
        
        <ul className="space-y-2 mb-4 text-gray-700">
          <li>• Provide food, shelter, and love.</li>
          <li>• Help with basic training and socialization.</li>
          <li>• Take the pet to veterinary check-ups (shelters usually cover medical costs).</li>
          <li>• Communicate with the rescue organization about the pet's progress.</li>
        </ul>
        
        <p className="text-gray-700 leading-relaxed">
          Fostering can last anywhere from a few weeks to a few months, 
          depending on the animal's needs.
        </p>
      </section>

      <section>
        <h2 className="text-4xl font-medium text-[#2D5F4F] mb-6">
          Adopting Animals
        </h2>
        
        <p className="text-gray-700 mb-8 leading-relaxed">
          Adopting means making an animal a permanent part of your family. 
          When you adopt, you take full responsibility for the pet's health, well-being, and happiness.
        </p>

        <h3 className="text-3xl font-normal text-[#2D5F4F] mb-4">
          Why Adopt?
        </h3>
        
        <ul className="space-y-4 mb-8">
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
        
        <ul className="space-y-2 text-gray-700">
          <li>• Provide lifelong care, including food, shelter, and veterinary visits.</li>
          <li>• Train and socialize your pet.</li>
          <li>• Be financially prepared for medical expenses and emergencies.</li>
          <li>• Ensure a stable, loving home for the pet's entire life (which could be 10-20+ years).</li>
        </ul>
      </section>
    </div>
  );
};

export default AdoptOrFosterPage;
