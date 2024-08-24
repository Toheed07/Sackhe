import React from 'react';

const KeyThrustAreas = () => {
  const areas = [
    { name: 'Ensure healthy lives and promote well-being for all at all ages', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Sustainable_Development_Goal_03GoodHealth.svg/1920px-Sustainable_Development_Goal_03GoodHealth.svg.png' },
    { name: 'Ensure access to affordable, reliable, sustainable and modern energy for all', icon: 'https://knowsdgs.jrc.ec.europa.eu/themes/sdgs/assets/img/sdg7.png' },
    { name: 'Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Sustainable_Development_Goal_09Industry.svg/600px-Sustainable_Development_Goal_09Industry.svg.png' },
    { name: 'Make cities and human settlements inclusive, safe, resilient and sustainable', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Sustainable_Development_Goal_11SustainableCities.svg/440px-Sustainable_Development_Goal_11SustainableCities.svg.png' },
    { name: 'Ensure sustainable consumption and production patterns', icon: 'https://textilesforsdgs.org/wp-content/uploads/2018/07/E_INVERTED-SDG-goals_icons-individual-RGB-12.png' },
    { name: 'Take urgent action to combat climate change and its impacts', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Sustainable_Development_Goal_13Climate.svg/600px-Sustainable_Development_Goal_13Climate.svg.png' },
    { name: 'Promote sustainable land use, manage forests, combat desertification, and protect biodiversity.', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Sustainable_Development_Goal_15LifeOnLand.svg/440px-Sustainable_Development_Goal_15LifeOnLand.svg.png' },
    { name: 'decent work and economic growth', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Sustainable_Development_Goal_08DecentWork.svg/600px-Sustainable_Development_Goal_08DecentWork.svg.png' },
  ];

  return (
    <div className="key-thrust-areas" style={{ backgroundColor: '#663399', padding: '40px 20px', textAlign: 'center' }}>
      <h2 style={{ color: 'white', marginBottom: '30px', fontSize: '2.5rem' }}>Key Thrust Areas</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
        {areas.map((area, index) => (
          <div key={index} style={{
            backgroundColor: 'white',
            borderRadius: '10px',
            padding: '20px',
            width: '200px',
            height: '250px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div style={{
              width: '100px',
              height: '100px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '10px'
            }}>
              <img 
                src={area.icon} 
                alt={area.name} 
                style={{ 
                  maxWidth: '100%', 
                  maxHeight: '100%', 
                  objectFit: 'contain'
                }}
              />
            </div>
            <div style={{ 
              color: '#663399', 
              fontWeight: 'bold', 
              fontSize: '1.3rem', 
              lineHeight: '1.2',
              overflowY: 'auto',
              flex: 1
            }}>
              {area.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyThrustAreas;