import { observer } from 'mobx-react-lite';
import React from 'react';
import { Row, Card } from 'react-bootstrap';
import { Context } from '..';

const BrandBar = observer(() => {
  const { device } = React.useContext(Context);
  return (
    <Row className="d-flex">
      {device.brands.map((brand) => (
        <Card
          key={brand.id}
          className="p-3"
          style={{ cursor: 'pointer' }}
          border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
          onClick={() => device.setSelectedBrand(brand)}>
          {brand.name}
        </Card>
      ))}{' '}
    </Row>
  );
});

export default BrandBar;
