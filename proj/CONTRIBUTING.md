# Contributing

Pull requests are essential for the maintainance and improvement of this project. Any such requests are welcomed granted they follow the right format. By participating in this project, you
agree to follow our suggested format.

[code of conduct]: https://thoughtbot.com/open-source-code-of-conduct

Fork then clone the repo:

    git clone git@github.com:your-username/rails-proj
 
 Migrate the database
 
    rake db:migrake

Make sure the tests pass:

    rspec

###Making changes

When making changes, avoid working directly on the master branch. Make a seperate branch for your intended fix

    git checkout -b your-branch-name
     
Make your changes. Add necessary tests for your changes. Make sure ALL the tests pass

    rspec

Commit often and concicely 

    git commit -m "Changes you've made"
    
Once finished, and all tests are passing. Merge to your master branch
  
    git checkout master
    git merge your-branch-name
    
Push to your fork and proceed to submit a pull request via github.

    git push origin master
    
At this point your changes will be awaiting review.

