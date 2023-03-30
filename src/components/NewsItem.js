import React from 'react'

const NewsItem=(props)=>{

        return (

            <div className="card">
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex:1,left:"85%"}}>
                    {props.source}
                </span>
                <img src={props.imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}...</h5>
                    <p className="card-text">{props.description}...</p>
                    <p className="card-text"><small className="text-muted">by {!props.author ? "unknown" : props.author} on {new Date(props.date).toGMTString()}</small></p>
                    <a href={props.newsUrl} rel="noreferrer" target="_blank" className="btn btn-primary">Read More</a>
                </div>
            </div>

        )
    }
export default NewsItem