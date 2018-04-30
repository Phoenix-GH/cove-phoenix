import React from 'react';
import classnames from 'classnames';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import PackageInfoBox from './packageInfoBox';
import PackageBackgroundImage from './packageBackgroundImage';
import InfoBoxButton from './infoBoxButton';
import stylesheet from '../../styles/components/packageTypes/packageCatalog.scss';

class PackageCatalog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: '1',
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab });
    }
  }

  activeClass(tab) {
    return classnames({ active: this.state.activeTab === tab });
  }

  render() {
    const toggleTab = this.toggle.bind(this);
    const activeClass = this.activeClass.bind(this);
    return (
      <div className="package-catalog-nav-tabs">
        <Nav tabs className="catalog-tabs">
          <NavItem>
            <NavLink
              className={activeClass('1')}
              onClick={() => toggleTab('1')}
            >
              Guard
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              className={activeClass('2')}
              onClick={() => toggleTab('2')}
            >
              Armor
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              className={activeClass('3')}
              onClick={() => toggleTab('3')}
            >
              Cover
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              className={activeClass('4')}
              onClick={() => toggleTab('4')}
            >
              Defense
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              className={activeClass('5')}
              onClick={() => toggleTab('5')}
            >
              Shield
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <PackageBackgroundImage imageFilename="guardPackageBackground" className="guard-package">
              <PackageInfoBox buttonLabel="See details" price={499} href="/" title="Guard">
                With Guard, you will have the most comprehensive security
                with not only protection from burglars but also fires,
                floods, and CO.
              </PackageInfoBox>
            </PackageBackgroundImage>
          </TabPane>

          <TabPane tabId="2">
            <PackageBackgroundImage imageFilename="armorPackageBackground" className="armor-package">
              <PackageInfoBox buttonLabel="See details" price={399} href="/" title="Armor">
                Armor is build to make your home protected everywhere.
                With armor, you can cover tons of entry points with
                one package.
              </PackageInfoBox>
            </PackageBackgroundImage>
          </TabPane>

          <TabPane tabId="3">
            <PackageBackgroundImage imageFilename="coverPackageBackground" className="cover-package">
              <PackageInfoBox buttonLabel="See details" price={349} href="/" title="Cover">
                Cover provides you preace of mind for mid-size homes.
                Our most popular system because it covers most
                American homes.
              </PackageInfoBox>
            </PackageBackgroundImage>
          </TabPane>

          <TabPane tabId="4">
            <PackageBackgroundImage imageFilename="defensePackageBackground" className="defense-package">
              <PackageInfoBox buttonLabel="See details" price={299} href="/" title="Defense">
                With defense, you can cover all your entry doors
                on a mid-size home. 80% of break-ins happen through a door.
              </PackageInfoBox>
            </PackageBackgroundImage>
          </TabPane>

          <TabPane tabId="5">
            <PackageBackgroundImage imageFilename="shieldPackageBackground" className="shield-package">
              <PackageInfoBox buttonLabel="See details" price={249} href="/" title="Shield">
                Shield is designed for smaller homes or apartments.
                It will provide you with the security you need
                for your family.
              </PackageInfoBox>
            </PackageBackgroundImage>
          </TabPane>
        </TabContent>

        <div className="add-sensors-container" style={this.state.activeTab === '1' ? {} : { display: 'none' }}>
          <h2>Need extra sensors?</h2>
          <h2>Add them here.</h2>
          <InfoBoxButton label="Add sensors" href="/" />
        </div>
        <style jsx>{stylesheet}</style>
      </div>
    );
  }
}

export default PackageCatalog;
