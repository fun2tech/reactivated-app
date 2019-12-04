import React, { useEffect, useState } from "react";
import githubClient from "../../clients/github";
import { formatDistance, subDays } from "date-fns";
import { Link } from "react-router-dom";
import { Button } from "antd";
import "./RepoContent.scss";

function RepoContent(props) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const {
    match: { params }
  } = props;

  const loadRepository = async () => {
    setLoading(true);
    const response = await githubClient.get(
      `/repos/${params.owner}/${params.repo}`
    );
    setData(response.data);
    setLoading(false);
  };

  useEffect(() => {
    loadRepository();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="repo-content">
      {loading ? (
        <p className="repo-title">Loading...</p>
      ) : (
        <>
          <Link to="/">
            <Button size="large" icon="github" type="primary">
              Return to repo list
            </Button>
          </Link>
          <div>
            <img
              className="repo-icon"
              src={data.owner.avatar_url}
              alt="repo-icon"
            />
            <p className="repo-title">
              {" "}
              <a href={data.html_url} target="_blank" rel="noopener noreferrer">
                {data.name}
              </a>
            </p>
          </div>
          <p className="repo-author">
            by{" "}
            <a
              href={data.owner.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.owner.login}
            </a>
          </p>
          <p className="repo-updated">
            <span
              style={{ verticalAlign: "middle" }}
              role="img"
              aria-label="light"
            >
              ⏱
            </span>{" "}
            created{" "}
            {formatDistance(subDays(new Date(data.created_at), 3), new Date())}{" "}
            ago
          </p>
          {data.language && (
            <p className="repo-desc">
              made with <b>{data.language}</b>
            </p>
          )}
        </>
      )}
    </div>
  );
}

export default RepoContent;
