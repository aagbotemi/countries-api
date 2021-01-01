import React from 'react';
import { Link } from 'react-router-dom';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col
} from 'reactstrap';

const CountryList = ({ country }) => {
    const { name, population, flag, capital, timezones, region } = country
    return (
        <div>
            <Card>
                <Link to="/details">
                    <CardImg height="180rem" top src={flag} alt={name} />
                </Link>
                <CardBody>
                    <div className="d-flex align-items-baseline mb-0">
                        <CardTitle tag="h5">{name},</CardTitle>
                        <CardSubtitle tag="h6" className="ml-1 text-muted">{capital}</CardSubtitle>
                    </div>
                    
                    <CardText className="mb-0">Region: {region}</CardText>
                    <CardText className="mb-0">Population: {population}</CardText>
                    <CardText>Time zone: {timezones}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}

export default CountryList




// <div class="my-12 mx-auto px-4 md:px-12">
            
        //     <div class="flex flex-wrap flex-row -mx-1 lg:-mx-4">
                

        //         <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
        //             Hello

                    {/* <article class="overflow-hidden rounded-lg shadow-lg">

                        <Link to="/details">
                            <img alt={name} class="h-auto w-full" src={flag} />
                        </Link>

                        {/* <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                            <h1 class="text-lg">
                                <a class="no-underline hover:underline text-black" href="#">
                                    Article Title
                                </a>
                            </h1>
                            <p class="text-grey-darker text-sm">
                                11/1/19
                            </p>
                        </header>

                        <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                            <a class="flex items-center no-underline hover:underline text-black" href="#">
                                <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random" />
                                <p class="ml-2 text-sm">
                                    Author Name
                                </p>
                            </a>
                            <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                                <span class="hidden">Like</span>
                                <i class="fa fa-heart"></i>
                            </a>
                        </footer> 

                    </article>*/}

        //         </div>

        //     </div>
        // </div>










{/* // <div>
        //     <Link to="/details">
        //         <img src={flag} alt={name}/>
            
        //     </Link>
        //     <h1>{name}</h1>
        //     <h1>{population}</h1>
        //     <h1>{timezones}</h1>
        //     <h1>{capital}</h1>
        // </div> */}