This is the website portion of the CA115 (DIME) project 2023 for Group R.

# Copyright
See this repo's [LICENSE](https://github.com/sammce/ca115-website/blob/main/LICENSE).

# Running the website locally
The website can be run locally using the following steps:

- First, ensure you have both [Git](https://git-scm.com/) and [NodeJS](https://nodejs.org) installed on your machine.
- Clone the repo using the `git clone` command. You don't need to be signed in to do this. Note that you are only permitted to do this subject to the LICENSE agreement:
```sh
git clone https://github.com/sammce/ca115-website
```
- Move into the `ca115-website` directory which was created by cloning the repo:
```sh
cd ca115-website
```
- Install the required dependencies using `npm`, which comes with NodeJS:
```sh
npm install
```
- Start the development server using:
```sh
npm run dev
```
- Navigate to http://localhost:3000 to see the website.