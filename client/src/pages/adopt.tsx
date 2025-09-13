export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Adopt or Foster
          </h1>
        </div>

        {/* Fostering Animals section */}
        <section className="mb-12 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Fostering Animals
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Fostering means temporarily caring for an animal until they find a
            permanent home. This is usually done through animal shelters,
            rescues, or organizations that need help placing animals in loving
            homes.
          </p>
        </section>

        {/* Motivation */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Why Foster?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3 text-blue-600">
                Helps shelters free up space
              </h3>
              <p className="text-gray-600">
                We rescue animals from difficult situations and provide them
                with medical care, food, and shelter....
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3 text-blue-600">
                Provide a safe and loving enviornment
              </h3>
              <p className="text-gray-600">
                some animals need a break from the shelter environment to
                recover from trauma or illness.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3 text-blue-600">
                Socializes pets
              </h3>
              <p className="text-gray-600">
                Foster families provide socialization, training, and enrichment
                for the animals in their care.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3 text-blue-600">
                Less commitment
              </h3>
              <p className="text-gray-600">
                You get the joy of having a pet without the long-term
                commitment.
              </p>
            </div>
          </div>
        </section>

        {/* Responsibilities */}
        <section className="mb-12 bg-green-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Responsabilities of a Foster Parent
          </h2>
          <p className="text-gray-600">
            Provide food, shelter, and love. Help with basic training and
            socialization. Take the pet to veterinary check-ups (shelters
            usually cover medical costs). Communicate with the rescue
            organization about the pet’s progress. Fostering can last anywhere
            from a few weeks to a few months, depending on the animal's needs.
          </p>
        </section>
      </div>
    </div>
  );
}
