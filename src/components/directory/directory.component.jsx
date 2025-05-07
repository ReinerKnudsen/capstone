import categories from '../../data/directory.json';
import DirectoryItem from '../directory-item/directory-item.component.jsx';
import { CatalogContainer } from './directory.styles.jsx';

const Directory = () => {
  return (
    <CatalogContainer>
      {categories.map(({ title, id, imageUrl, route }) => (
        <DirectoryItem key={id} title={title} imageUrl={imageUrl} route={route} />
      ))}
    </CatalogContainer>
  );
};

export default Directory;
