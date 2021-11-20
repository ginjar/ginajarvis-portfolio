import React, { Component } from "react";
import axios from "axios";
// banner_image_url: "https://devcamp-space.s3.amazonaws.com/ZRQ8NPn5bDGC2XrEUrTo2vKR?response-content-disposition=inline%3B%20filename%3D%22landscape1.jpg%22%3B%20filename%2A%3DUTF-8%27%27landscape1.jpg&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJEHZJNHM5JFESRRQ%2F20211109%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20211109T184044Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=6981d1db7fd54243a6a03e63b1539fb3f74f49c8e8ae9c20983c1c4eca6c9153"
// category: "small business"
// column_names_merged_with_images: (9) ['id', 'name', 'description', 'url', 'category', 'position', 'thumb_image', 'banner_image', 'logo']
// description: "Landscaper"
// id: 30172
// logo_url: null
// name: "Oakley Landscaping"
// position: 1
// thumb_image_url: "https://devcamp-space.s3.amazonaws.com/vhjH6CxL4d4488od7mWkzXzw?response-content-disposition=inline%3B%20filename%3D%22rock24.GIF%22%3B%20filename%2A%3DUTF-8%27%27rock24.GIF&response-content-type=image%2Fgif&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJEHZJNHM5JFESRRQ%2F20211109%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20211109T184044Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=30d74f7e0d977c444ec020f92d436815a1b9d4dcd30921d8f7dd0d11618e49b8"
// url: "joakleylandscaping.com"

export default class PortfolioDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      portfolioitem: {}
    }
  }

  componentWillMount() {
    this.getPortfolioItem();
  }
  getPortfolioItem() {
    axios
      .get(
        `https://ginajarvis.devcamp.space/portfolio/portfolio_items/${this.props.match.params.slug
        }`,
        { withCredentials: true }
      )
      .then(response => {
        this.setState({
          portfolioitem: response.data.portfolio_item
        })
        console.log("hey this worked", response);
      })
      .catch(error => {
        console.log("getPortfolioItemsError", error);
      })
  }

  render() {
    const {
      banner_image_url,
      category,
      description,
      logo_url,
      name,
      thumb_image_url,
      url } = this.state.portfolioitem
    return (
      <div className="portfolio-detail-container">
        <div className="portfolio-detail-wrapper">
          <div className="portfolio-detail-left">
            <h2>{name}</h2>
            <p>{description}</p>

          </div>
          <div className="portfolio-detail-right">
            <div className="banner">
              <img src={banner_image_url}></img>
              
            </div>
          </div>
        </div>

      </div>




    );
  }
}