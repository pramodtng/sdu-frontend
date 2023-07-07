import React from 'react'

const TeamSection = (team) => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Our Team
            </h2>
            {/* <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Explore the whole collection of open-source web components and
              elements built with the utility classes from Tailwind
            </p> */}
          </div>
          <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {team.team.data.map(function (teams) {
              return (
                <div key={teams.id}>
                  <div className="text-center text-gray-500 dark:text-gray-400">
                    <img
                      className="mx-auto mb-4 w-36 h-36 rounded-full"
                      src={teams.attributes.image.data.attributes.url}
                      alt="team"
                    />
                    <h3 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">{teams.attributes.name}</a>
                    </h3>
                    <p>{teams.attributes.designation}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default TeamSection