import React, { Component } from "react";
import Book from "./book";
import ListGroup from "./listgroup";
import Pagination from "./pagination";
import _ from "lodash";
import { Link } from "react-router-dom";

class Books extends Component {
  state = {
    books: [
      {
        _id: 1,
        title: "Unlocking Android",
        pageCount: 416,
        publishedDate: "2009-04-01",
        authors: "W. Frank Ableson",
        category: "Android",url:"https://picsum.photos/231"
      },
      {
        _id: 2,
        title: "Android in Action, Second Edition",
        pageCount: 592,
        publishedDate: "2011-01-14",
        authors: "W. Frank Ableson",
        category: "Java",url:"https://picsum.photos/232"
      },
      {
        _id: 3,
        title: "Specification by Example",
        pageCount: 0,
        publishedDate: "2011-06-03",
        authors: ["Gojko Adzic"],
        category: "Software Engineering",url:"https://picsum.photos/233"
      },
      {
        _id: 4,
        title: "Flex 3 in Action",
        pageCount: 576,
        publishedDate: "2009-02-02",
        authors: "Tariq Ahmed with Jon Hirschi",
        category: "Internet",url:"https://picsum.photos/234"
      },
      {
        _id: 5,
        title: "Flex 4 in Action",
        pageCount: 600,
        publishedDate: "2010-11-15",
        authors: ["Tariq Ahmed"],
        category: "Internet",url:"https://picsum.photos/235"
      },
      {
        _id: 6,
        title: "Collective Intelligence in Action",
        pageCount: 425,
        publishedDate: "2008-10-01",
        authors: ["Satnam Alag"],
        category: "Internet",url:"https://picsum.photos/236"
      },
      {
        _id: 7,
        title: "Zend Framework in Action",
        pageCount: 432,
        publishedDate: "2008-12-01",
        authors: ["Rob Allen"],
        category: "Web Development",url:"https://picsum.photos/237"
      },
      {
        _id: 8,
        title: "Flex on Java",
        pageCount: 265,
        publishedDate: "2010-10-15",
        authors: ["Bernerd Allmon"],
        category: "Internet",url:"https://picsum.photos/238"
      },
      {
        _id: 9,
        title: "Griffon in Action",
        pageCount: 375,
        publishedDate: "2012-06-04",
        authors: "Andres Almiray",
        category: "Java",url:"https://picsum.photos/239"
      },
      {
        _id: 10,
        title: "OSGi in Depth",
        pageCount: 325,
        publishedDate: "2011-12-12",
        authors: ["Alexandre de Castro Alves"],
        category: "Java",url:"https://picsum.photos/240"
      },
      {
        _id: 11,
        title: "Flexible Rails",
        pageCount: 592,
        publishedDate: "2008-01-01",
        authors: ["Peter Armstrong"],
        category: "Web Development",url:"https://picsum.photos/241"
      },
      {
        _id: 13,
        title: "Hello! Flex 4",
        pageCount: 258,
        publishedDate: "2009-11-01",
        authors: ["Peter Armstrong"],
        category: "Internet",url:"https://picsum.photos/242"
      },
      {
        _id: 14,
        title: "Coffeehouse",
        pageCount: 316,
        publishedDate: "1997-07-01",
        authors: ["Levi Asher"],
        category: "Miscellaneous",url:"https://picsum.photos/243"
      },
      {
        _id: 15,
        title: "Team Foundation Server 2008 in Action",
        pageCount: 344,
        publishedDate: "2008-12-01",
        authors: ["Jamil Azher"],
        category: "Microsoft .NET",url:"https://picsum.photos/244"
      },
      {
        _id: 16,
        title: "Brownfield Application Development in .NET",
        pageCount: 550,
        publishedDate: "2010-04-16",
        authors: ["Kyle Baley"],
        category: "Microsoft",url:"https://picsum.photos/245"
      },
      {
        _id: 17,
        title: "MongoDB in Action",
        pageCount: 0,
        publishedDate: "2011-12-12",
        authors: ["Kyle Banker"],
        category: "Next Generation Databases",
        url:"https://picsum.photos/246"
      },
      {
        _id: 18,
        title: "Distributed Application Development with PowerBuilder 6.0",
        pageCount: 504,
        publishedDate: "1998-06-01",
        authors: ["Michael J. Barlotta"],
        category: "PowerBuilder",
        url:"https://picsum.photos/247"
      },
      {
        _id: 19,
        title: "Jaguar Development with PowerBuilder 7",
        pageCount: 550,
        publishedDate: "1999-08-01",
        authors: ["Michael Barlotta"],
        category: "PowerBuilder",
        url:"https://picsum.photos/248"
      }
    ],

    categories: [
      { id: 1, name: "Android" },
      { id: 2, name: "Java" },
      { id: 3, name: "Software Engineering" },
      { id: 4, name: "Internet" },
      { id: 5, name: "Web Development" },
      { id: 6, name: "Miscellaneous" },
      { id: 7, name: "Microsoft .NET" },
      { id: 8, name: "Microsoft" },
      { id: 9, name: "Next Generation Databases" },
      { id: 10, name: "PowerBuilder" }
    ],
    selectedCategory: 1,
    pageSize: 2,
    selectedPage: 1
  };
  handleSelectedCategory = category => {
    console.log(category);
    this.setState({ selectedCategory: category.id });
  };

  handlePageSelect = page => {
    this.setState({ selectedPage: page });
  };

  paginate = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    return _(items) // converts items into lodash obj
      .slice(startIndex)
      .take(pageSize)
      .value();
  };

  render() {
    const { categories } = this.state;
    const { selectedCategory } = this.state;
    // filtering movies based on genre
    const category = categories.filter(
      category => category.id === selectedCategory
    );

    const filteredBooks = this.state.books.filter(
      book => book.category === category[0].name
    );

    const paginatedBooks = this.paginate(
      filteredBooks,
      this.state.selectedPage,
      this.state.pageSize
    );

    return (
      <div className="container">
        <div className="row">
          <div className="col-3">
            <ListGroup
              categories={categories}
              selectedcategory={this.state.selectedCategory}
              handleSelectedCategory={this.handleSelectedCategory}
            />
          </div>
          <div className="col-9">
            {paginatedBooks.map(book => (
              <Link
                to={{ pathname: `/books/${book._id}`, state: { book } }}
                style={{ textDecoration: "none" }}
              >
                <Book book={book} />
              </Link>
            ))}
          </div>
        </div>
        <Pagination
          pageSize={this.state.pageSize}
          totalBooks={filteredBooks.length}
          selectedPage={this.state.selectedPage}
          handlePageSelect={this.handlePageSelect}
        />
      </div>
    );
  }
}

export default Books;