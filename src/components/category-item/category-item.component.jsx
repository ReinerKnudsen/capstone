import { Link } from 'react-router';

import './category-item.styles.scss';

const CategoryItem = ({ id, title, imageUrl }) => {
  return (
    <div key={id} className='category-item-container'>
      <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='category-body-container'>
        <h2>
          <Link to={`/shop/${title}`}>{title}</Link>
        </h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
