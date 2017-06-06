# 69_Book_Store
#69 Simple Bookstore - Create a simple content management system that allows users to view, add, delete, and update books. Books entered in the system can be viewed in a list, as a single entry on its own page, or searched for using basic searches (by title, author, or genre).

PROJECT DETAILS
purring-mockingbird
#69 [L1]: Simple Book Store
Members: Glenn-David Daniel
Coach: TBD
Cycle : 47
Created on 6/5/2017

ATTRIBUTIONS
---
authors:
- "jrob8577"
team_size: 2
goal_id: 69
title: Simple Book Store
created_at: '2016-08-12T23:16:31Z'
labels:
- practice
published: true
level: '1'
redirect_from: "/goals/69"
---

Dataset :  jaidevd Aug 14, 2015 ("https://gist.github.com/jaidevd/23aef12e9bf56c618c41/revisions")
---

## Description

You've been tasked with building a web app for a local bookstore to help them manage their inventory.

Create a simple content management system that allows users to view, add, delete, and update books. 
Books entered in the system can be viewed in a list, as a single entry on its own page, or searched 
for using basic searches (by title, author, or genre).
---

## Specifications

#### General
- [ ] All views are rendered on the server using server-side templates written with [Pug][] or [EJS][] NOTE: developer chose HANDLEBARS as an alternative template engine.
- [ ] Web server can be started with the command `npm start`
- [ ] Test suite can be run with the command `npm test`
- [ ] All features are added as pull requests
- [ ] All pull requests are approved by at least one other member of the team using GitHub's [pull request review feature](https://help.github.com/articles/about-pull-request-reviews/) (so that your teammate's approval is of the PR is documented)
- [ ] Variables, functions, files, etc. have appropriate and meaningful names.
- [ ] Functions are small and serve a single purpose
- [ ] Code uses a linter and there are no linting errors.
- [ ] Code is well tested and all tests are passing.
- [ ] The artifact produced is properly licensed, preferably with the [MIT license](https://opensource.org/licenses/MIT).

#### Stories
- [ ] Books have a title, author, and genre
- [ ] Users can add books into the bookstore system via an admin page (_create_)
- [ ] Users can see a list of books on the home page (_read_)
- [ ] Users can edit a book's title, author, or genre (_update_)
- [ ] Users can delete a book from the bookstore (_delete_)
- [ ] Users can search for books by title OR by author OR by genre (_read_)
- [ ] Users can view book details on a book detail page (_read_)
- [ ] Lists of books are always paginated in groups of 10
- [ ] Book detail view is linked to from the listing and search pages
- [ ] Search results are presented in a new page

#### HTTP Verbs
Appropriate HTTP verbs are used for CRUD actions (for reference, follow the guidelines explained in [this article](http://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api#restful))
- [ ] `GET` requests are only used for _read_ actions
- [ ] `POST` requests are only used for _create_ actions
- [ ] `PUT` or `PATCH` requests are only used for _update_ actions
- [ ] `DELETE` requests are only used for _delete_ actions

### Stretch

- [ ] App is deployed and live on the web (consider using Heroku)
- [ ] All source code is written with ES6
- [ ] Users have their own account and can sign up and sign in/out
- [ ] Users have one of three roles: `admin`, `clerk`, `reader`
- [ ] Users with role `reader` can only view and search for books
- [ ] Users with role `clerk` can edit books in addition to viewing/searching
- [ ] Users with role `admin` can perform all actions (create, read, update, delete) with books
- [ ] Books have a price, cover image, publisher, and ISBN number
