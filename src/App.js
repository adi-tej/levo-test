import React, {useEffect, useState, useRef} from "react";
import './App.css';
import {Card, CardDeck, Col, Button} from 'react-bootstrap';
const MAX_POSSIBLE_HEIGHT = 500;

const Text = ({ maxHeight, children }) => {
    const ref = useRef();
    const [expanded, setExpanded] = useState(true);

    useEffect(() => {
        if (ref.current.scrollHeight > maxHeight) {
            setExpanded(false);
        }
    }, [maxHeight]);

    return (
        <Card.Text as={'div'} ref={ref}>
            <div
                style={{ maxHeight: expanded ? MAX_POSSIBLE_HEIGHT : maxHeight, overflow:'hidden' }}
            >
                {children}
            </div>
            <br/>
            <Button onClick={() => setExpanded(!expanded)} variant="outline-primary">{expanded?'Read Less':'Read More'}</Button>
        </Card.Text>
    );
};

function App() {
    const [show, setShow] = useState(1)
    const [data, setData] = useState([
        {
            title: 'Love of learning, art keys to a great year for Gwen',
            date: '12 Sep, 2018',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            title: 'Curious mind leads the way to the carer Jill',
            date: '28 Sep, 2018',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            title: 'Celebrating our volunteers',
            date: '12 Sep, 2018',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            title: 'Love of learning, art keys to a great year for Gwen',
            date: '12 Sep, 2018',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            title: 'Love of learning, art keys to a great year for Gwen',
            date: '12 Sep, 2018',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            title: 'Love of learning, art keys to a great year for Gwen',
            date: '12 Sep, 2018',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            title: 'Love of learning, art keys to a great year for Gwen',
            date: '12 Sep, 2018',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }]
    )
    const [cardChunks, setCardChunks] = useState([])
    const [showMoreCards, setShowMoreCards] = useState(false)
    const chunk = (arr, chunkSize = 1, cache = []) => {
        const tmp = [...arr]
        if (chunkSize <= 0) return cache
        while (tmp.length) cache.push(tmp.splice(0, chunkSize))
        return cache
    }
    const handleShowMoreCards = () => {
        setShow(data.length)
        setShowMoreCards(true)
    }
    const handleShowLessCards = () => {
        setShow(1)
        setShowMoreCards(false)
    }
    useEffect(() => {
        setCardChunks(chunk(data, 3))
    }, [data])
    return (
        <div className="App">
            <div style={{paddingLeft: '1.3%'}}>
                <h2 style={{color: 'red'}}>Related Articles</h2>
                <p style={{width: '70%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            {
                cardChunks.map((cardChunk, index) => {
                    if (index < show) {
                        return (
                            <div key={index}>
                                <CardDeck>
                                    {cardChunk.map((card, index) => (
                                        <Col xs="4" key={index}>
                                            <Card style={{width: '100%'}}>
                                                <Card.Body>
                                                    <Card.Subtitle
                                                        className="mb-2 text-muted">{card.date}</Card.Subtitle>
                                                    <Card.Title style={{height:45}}>{card.title}</Card.Title>
                                                    <Text maxHeight={173}>{card.description}</Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    ))}
                                </CardDeck>
                                <br/>
                            </div>
                        )
                    }else{
                        return null
                    }
                })
            }

            {!showMoreCards ?
                <Button style={{float: 'right'}} variant="primary" onClick={handleShowMoreCards}>Read More</Button>
                :
                <Button style={{float: 'right'}} variant="primary" onClick={handleShowLessCards}>Read Less</Button>
            }

        </div>
    );
}

export default App;
