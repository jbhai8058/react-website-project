import React, { Fragment, useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import AppUrl from '../../Rest Api/AppUrl';
import RestClient from '../../Rest Api/RestClient';

const Analysis = () => {


    const [data, setData] = useState(null);

    useEffect(() => {
        RestClient.GetRequest(AppUrl.ChartData).then(result => {
          setData(result);
        }).catch((error) => {
            console.log(error);
        })
      }, []);


    const blue = "#051b35";

    return (
        <Fragment>
            <Container className='text-center'>
                <h1 className='serviceMainTitle'>TECHNOLOGY USED</h1>
                <div className='bottom'></div>
                <Row>
                    <Col lg={6} md={12} sm={12}>
                        <ResponsiveContainer>
                            <BarChart width={100} height={300} data={data}>
                                <XAxis dataKey="Technology" />
                                <Tooltip />
                                <Bar dataKey="Projects" fill={blue} />
                            </BarChart>
                        </ResponsiveContainer>
                    </Col>
                    <Col lg={6} md={12} sm={12}>
                        <p className='text-justify serviceDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sint ea exercitationem, doloremque error atque voluptate esse, consequatur suscipit quas ab adipisci nesciunt consectetur quae architecto cumque aspernatur vero nisi?<br /><br />
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque beatae, quos voluptates aut consequatur necessitatibus unde soluta, tempora laborum dolorum odio sint tempore reprehenderit repellat velit, eaque molestias aspernatur delectus?<br /><br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est commodi facere sint. Eos pariatur dolorem quibusdam, accusantium officiis nam quos in tenetur dolore amet, porro, alias fuga non minima? Soluta?<br /><br />
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere veritatis tempore nulla reprehenderit maiores, ea velit ratione similique, labore corrupti quia eos officia aperiam est temporibus optio omnis aspernatur possimus!
                        </p>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default Analysis
