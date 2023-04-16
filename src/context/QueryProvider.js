import { useState } from 'react';
import PropTypes from 'prop-types';
import QueryContext from './QueryContext';

function QueryProvider({ children }) {
  const [source, setSource] = useState('all');
  const [category, setCategory] = useState('refrigerator');
  const [search, setSearch] = useState('');
  const [content, setContent] = useState([]);

  const contextValue = {
    source,
    setSource,
    category,
    setCategory,
    search,
    setSearch,
    content,
    setContent,
  };

  return (
    <QueryContext.Provider value={contextValue}>
      {children}
    </QueryContext.Provider>
  );
}

QueryProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default QueryProvider;
