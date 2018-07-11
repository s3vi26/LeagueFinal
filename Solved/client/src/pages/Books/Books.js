import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import DeleteBtn from "../../components/DeleteBtn";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Books extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.loadBooks();
  }

  handleClick=event=>{
    event.preventDefault();
    var title=document.querySelector("#title").value
    var author=document.querySelector("#author").value
    var synopsis=document.querySelector("#synopsis").value

    var bookData={
      title: title,
      author: author,
      synopsis:synopsis,
    }
    console.log(bookData)
     API.saveBook(bookData)
      .then(res=>console.log(res.data))

   // API.getSummoner()

      //.then(res=>console.log(res))

    //console.log("yay")
  }

  loadBooks = () => {
    API.getBooks()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));


  
   };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron>
            <form>
              <Input id="title" name="title" placeholder="Title (required)" />
              <Input id ="author" name="author" placeholder="Author (required)" />
              <TextArea id ="synopsis" name="synopsis" placeholder="Synopsis (Optional)" />
              <FormBtn onClick={this.handleClick}>Submit Book</FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron> 
              <h1>Books On My List</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <a href={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </a>
                    <DeleteBtn />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
        <FormBtn onClick={this.handleClick}>API</FormBtn>
      </Container>
    );
  }
}

export default Books;
