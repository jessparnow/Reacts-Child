import React, { useRef, useState } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_PROFILES, LOADING } from "../../utils/actions";
import API from "../../utils/API";
import SignUpImg from "../UploadImages/SignUpImg/index";
import Modal from "react-modal";
import {Link} from "react-router-dom";
function UpdateProfile() {
  const ParentRef = useRef();
  const NameRef = useRef();
  const breedRef = useRef();
  const ageRef = useRef();
  const bioRef = useRef();
  const [state, dispatch] = useStoreContext();
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const handleSubmit = (e) => {
    setModalIsOpen(false)
    e.preventDefault();
    dispatch({ type: LOADING });
    API.updateProfiles({
      puppyParent: ParentRef.current.value,
      puppyName: NameRef.current.value,
      bio: bioRef.current.value,
      breed: breedRef.current.value,
      age: ageRef.current.value,
    })
      .then((result) => {
        dispatch({
          type: UPDATE_PROFILES,
          profile: result.data,
        });
      })
      .catch((err) => console.log(err));
    ParentRef.current.value = "";
    NameRef.current.value = "";
    bioRef.current.value = "";
    breedRef.current.value = "";
    ageRef.current.value = "";
  };
  return (
    <div>
      <div class="hidden sm:block" aria-hidden="true">
        <div class="py-5">
          <div class="border-t border-gray-200"></div>
        </div>
      </div>
      <div class="mt-10 sm:mt-0">
        <div class="md:grid md:grid-cols-3 md:gap-6">
          <div class="md:col-span-1">
            <div class="px-4 sm:px-0">
              <h3 class="text-lg font-medium leading-6 text-gray-900">
                Profile
              </h3>
              <p class="mt-1 text-sm text-gray-600">
                You Can Update Your Profile here
              </p>
            </div>
          </div>
          <button onClick={() => setModalIsOpen(true)}> + Update Your Profile</button>
      <Modal isOpen={modalIsOpen}>
          <div class="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div class="shadow overflow-hidden sm:rounded-md">
                <div class="px-4 py-5 bg-white sm:p-6">
                <SignUpImg></SignUpImg>
                  <div class="grid grid-cols-6 gap-6">
                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="puppy_parent"
                        class="block text-sm font-medium text-gray-700"
                      >
                        My Human
                      </label>
                      <input
                        required
                        ref={ParentRef}
                        type="text"
                        name="puppy_parent"
                        id="puppy_parent"
                        autocomplete="given-name"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="puppy_name"
                        class="block text-sm font-medium text-gray-700"
                      >
                        My Name
                      </label>
                      <input
                        required
                        ref={NameRef}
                        type="text"
                        name="puppy_name"
                        id="puppy_name"
                        autocomplete="family-name"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div class="col-span-6">
                      <label
                        for="puppy_bio"
                        class="block text-sm font-medium text-gray-700"
                      >
                        About Me
                      </label>
                      <input
                        ref={bioRef}
                        type="text"
                        name="puppy_bio"
                        id="puppy_bio"
                        autocomplete="puppyBio"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div class="col-span-6 sm:col-span-4">
                      <label
                        for="puppy_breed"
                        class="block text-sm font-medium text-gray-700"
                      >
                        What I am
                      </label>
                      <input
                        ref={breedRef}
                        type="text"
                        name="puppy_breed"
                        id="puppy_breed"
                        autocomplete="breed"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div class="col-span-6 sm:col-span-4">
                      <label
                        for="puppy_age"
                        class="block text-sm font-medium text-gray-700"
                      >
                        How Old I Am
                      </label>
                      <input
                        ref={ageRef}
                        type="text"
                        name="puppy_age"
                        id="puppy_age"
                        autocomplete="age"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <Link
              to="/profile"
              className={
                window.location.pathname === "/createprofile" || window.location.pathname === "/profile"}
            >
                  <button
                    type="submit"
                    class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={handleSubmit}
                    disabled={state.loading}
                  >
                    + Update Profile
                  </button>
                  </Link>
                  <button
                    type="submit"
                    class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    disabled={state.loading}
                    onClick={ () => setModalIsOpen(false) }
                  >
                    Close
                  </button>
                </div>
              </div>
            </form>
          </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}
export default UpdateProfile;