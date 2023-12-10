import React, { useEffect, useState } from "react";
import { Badge, Col, Container, Form, Row } from "react-bootstrap";
import appStyles from "../../App.module.css";
import styles from "../../styles/PostsPage.module.css";
import Post from "./Post";
import Asset from "../../components/Asset";
import NoResultsImage from "../../assets/no_results.png"
import SecondaryNavBar from "../../components/SecondaryNavBar";
import { useLocation } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import PopularProfiles from "../profiles/PopularProfiles";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

function PostsPage({ message, filter = "" }) {
  const [posts, setPosts] = useState({ results: [] });
  const [country, setCountry] = useState(null);
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();

  const currentUser = useCurrentUser();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axiosReq.get(
          `/posts/?${filter}search=${query}${country !== null ? `&country=${country}` : ""
          }`
        );
        setPosts(data);
        setHasLoaded(true);
      } catch (err) {
      }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchPosts();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [filter, query, pathname, currentUser, country]);

  return (
    <Container>
      <Row>
        <Col className="py-2 p-0 p-lg-2" lg={4}>

          <SecondaryNavBar />

          <PopularProfiles />

          <Container
            className={`${appStyles.CollapsedColumn} mb-3`}
          >
          </Container>

          <Container
            className={`${appStyles.Content} ${appStyles.CollapsedColumn} mb-3`}
          >
            <p>Popular Countries</p>
            <Badge variant="secondary" pill className={`${styles.Badge}`} onClick={() => setCountry(null)}>All</Badge>
            <Badge variant="secondary" pill className={`${styles.Badge}`} onClick={() => setCountry("US")}>United States</Badge>
            <Badge variant="secondary" pill className={`${styles.Badge}`} onClick={() => setCountry("GB")}>United Kingdom</Badge>
            <Badge variant="secondary" pill className={`${styles.Badge}`} onClick={() => setCountry("CN")}>China</Badge>
            <Badge variant="secondary" pill className={`${styles.Badge}`} onClick={() => setCountry("DE")}>Germany</Badge>
            <Badge variant="secondary" pill className={`${styles.Badge}`} onClick={() => setCountry("ES")}>Spain</Badge>
            <Badge variant="secondary" pill className={`${styles.Badge}`} onClick={() => setCountry("FR")}>France</Badge>
            <Badge variant="secondary" pill className={`${styles.Badge}`} onClick={() => setCountry("IT")}>Italy</Badge>
            <Badge variant="secondary" pill className={`${styles.Badge}`} onClick={() => setCountry("RU")}>Russian Federation</Badge>
            <Badge variant="secondary" pill className={`${styles.Badge}`} onClick={() => setCountry("GR")}>Greece</Badge>
            <Badge variant="secondary" pill className={`${styles.Badge}`} onClick={() => setCountry("MX")}>Mexico</Badge>
            <Badge variant="secondary" pill className={`${styles.Badge}`} onClick={() => setCountry("TH")}>Thailand</Badge>
            <Badge variant="secondary" pill className={`${styles.Badge}`} onClick={() => setCountry("PT")}>Portugal</Badge>
            <Badge variant="secondary" pill className={`${styles.Badge}`} onClick={() => setCountry("IN")}>Austria</Badge>
            <Badge variant="secondary" pill className={`${styles.Badge}`} onClick={() => setCountry("DK")}>Denmark</Badge>
            <Badge variant="secondary" pill className={`${styles.Badge}`} onClick={() => setCountry("SA")}>Saudi Arabia</Badge>
            <Badge variant="secondary" pill className={`${styles.Badge}`} onClick={() => setCountry("ZA")}>South Africa</Badge>
            <Badge variant="secondary" pill className={`${styles.Badge}`} onClick={() => setCountry("HU")}>Hungary</Badge>
            <Badge variant="secondary" pill className={`${styles.Badge}`} onClick={() => setCountry("IS")}>Iceland</Badge>
            <Badge variant="secondary" pill className={`${styles.Badge}`} onClick={() => setCountry("LK")}>Sri Lanka</Badge>
            <Badge variant="secondary" pill className={`${styles.Badge}`} onClick={() => setCountry("other")}>Other</Badge>
          </Container>
        </Col>

        <Col className="py-2 p-0 p-lg-2" lg={8}>

          <i className={`fas fa-search ${styles.SearchIcon}`} />
          <Form
            className={styles.SearchBar}
            onSubmit={(e) => e.preventDefault()}
          >
            <Form.Control
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              className="mr-sm-2"
              placeholder="Search posts"
            />
          </Form>

          {hasLoaded ? (
            <>
              {posts.results.length ? (
                <InfiniteScroll
                  children={posts.results.map((post) => (
                    <Post key={post.id} {...post} setPosts={setPosts} />
                  ))}
                  dataLength={posts.results.length}
                  loader={<Asset spinner />}
                  hasMore={!!posts.next}
                  next={() => fetchMoreData(posts, setPosts)}
                />
              ) : (
                <Container className={appStyles.Content}>
                  <Asset src={NoResultsImage} width={20} height={20} message={message} />
                </Container>
              )}
            </>
          ) : (
            <Container className={appStyles.Content}>
              <Asset spinner />
            </Container>
          )}

        </Col>
      </Row>
    </Container>
  );
}

export default PostsPage;