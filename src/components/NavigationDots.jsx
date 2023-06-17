import PropTypes from 'prop-types'

const NavigationDots = ({ active }) => {
    const link = active.map((item, index) => {
        let nav;
        if(index === 0){
            nav = 'home'
        } else if(index === 1){
            nav = 'about'
        } else if(index === 2){
            nav = 'work'
        } else if(index === 3){
            nav = 'skills'
        } else{
            nav = 'contact'
        }

        return (
            <a
                href={`#${nav}`}
                key={nav + index}
                className="app__navigation-dot"
                style={item ? { backgroundColor: '#313BAC' } : {}}
            />
        )
    })
    
    return (
        <div className='app__navigation'>
            {link}
        </div>
    )
}

NavigationDots.propTypes = {
    active: PropTypes.array.isRequired
}

export default NavigationDots