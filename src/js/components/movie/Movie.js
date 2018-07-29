import React from 'react';
export default class Movie extends React.Component
{
    render()
    {
        const {
            title,episode_id,opening_crawl,director,producer,release_date
        } =this.props;
        return(
            <li>
            <div className="panel panel-default">
            <div className="panel-heading">
                <div className="panel-title"><h2>{title}</h2></div>
                </div>
                <div className="panel-body">
                <div><p>{opening_crawl}</p></div>
                </div>
                <div class="panel-footer">
                <div>Episode Id: {episode_id}</div>
                <div>Director: {director}</div>
                <div>Producer: {producer} </div>
                <div>Release Date: {release_date}</div>
                </div>
                </div>
            </li>
        );
    }
}