const Links = () => {

    const items = [
        'Home',
        'About Us',
        'Our Services',
        'Our Portfolio',
        'Contact'
    ]

  return (
    <div className="links">
        {items.map(item => (
            <a href={`#${item}`} key={item}>
                {item}
            </a>
        ))}
    </div>
  )
}

export default Links