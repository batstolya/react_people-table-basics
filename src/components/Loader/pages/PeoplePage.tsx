import { useEffect, useState } from 'react';
import { getPeople } from '../../../api';
import { Person } from '../../../types';
import { Loader } from '../Loader';
import { PeopleTable } from './PeopleTable';

export const PeoplePage = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const loadedPeople = async () => {
    setIsLoading(true);

    try {
      const loadPeople = await getPeople();

      const peopleWithParents = loadPeople.map((person) => {
        const fountFather = loadPeople.find(
          (father) => father.name === person.fatherName,
        );
        const foundMother = loadPeople.find(
          (mother) => mother.name === person.motherName,
        );

        return Object.assign(person, {
          father: fountFather,
          mother: foundMother,
        });
      });

      setPeople(peopleWithParents);
    } catch (error) {
      setErrorMessage(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadedPeople();
  }, []);

  const hasNoPeople = !isLoading && !people.length;

  return (
    <>
      <h1 className="title">People Page</h1>
      <div className="block">
        <div className="box table-container">
          {isLoading && <Loader />}

          {errorMessage && (
            <p data-cy="peopleLoadingError" className="has-text-danger">
              Something went wrong
            </p>
          )}

          {hasNoPeople && (
            <p data-cy="noPeopleMessage">There are no people on the server</p>
          )}

          {!isLoading && <PeopleTable people={people} />}
        </div>
      </div>
    </>
  );
};
