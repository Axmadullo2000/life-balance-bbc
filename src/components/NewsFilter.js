import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import { activeFilterChanged, fetchFilter } from '../components/action_reducer/FilterSlice'

import classNames from "classnames"


export const NewsFilter = () => {
    const dispatch = useDispatch()
    const { filters, filterLoadingStatus, activeFilter } = useSelector(state => state.filter)

    useEffect(() => {
        dispatch(fetchFilter());
        // eslint-disable-next-line
        }, [])

    if (filterLoadingStatus === 'loading') {
        return <h4 className='text-center mt-5'>Loading...</h4>
    }else if (filterLoadingStatus === 'error') {
        return <h4 className='text-center mt-5'>News doesn't exists</h4>
    }

    const renderFilters = (arr) => {
        if (arr.length === 0) {
            return <h5 className="text-center mt-5">Filters doesn't exists</h5>
        }

        return arr.map(({name, label, className}) => {
            const btnClasses = classNames("btn", className, {
                "active": name === activeFilter
            })

            return <button
                key={ name }
                id={ name }
                className={`${ btnClasses } m-lg-2`}
                onClick={ () => dispatch(activeFilterChanged(name)) }
            >{ label }</button>
        })
    }

    const element = renderFilters(filters)


    return <div className="card shadow-lg mt-4 filterContent">
        <div className="card-body">
            <p className="card-text">Filter by category</p>
            <div className="btn-group">
                { element }
            </div>
        </div>
    </div>
}





