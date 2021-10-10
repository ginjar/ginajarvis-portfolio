import React, { Component } from "react";
import axios from "axios";


export default class BlogDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentId: this.props.match.params.slug,
            blogItem: {}

        };
    }
    getBlogItem() {
        axios
            .get(
            `https://ginajarvis.devcamp.space/portfolio/portfolio_blogs/${this.state.currentId}`
        )
            .then(response => {
              
                this.setState({
                    blogItem: response.data.portfolio_blog
                });
            })
            .catch(err => {
            console.log("getBlogItem error", err);
        });
    }

    componentDidMount() {
        this.getBlogItem();
    }
  
    render() {
        const {
          title,
          content,
          featured_image_url,
          blog_status
        } = this.state.blogItem;
    
        return (
          <div className = "blog-container">
                <div className ="content-container">
                    <h3>{title}</h3>
                  
                <img className ="featured-image-wrapper" src={featured_image_url} />
                    <div>{content}</div>
                 </div>
          </div>
        );
      }
    }