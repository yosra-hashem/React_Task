import './Female.css'

const Female = ({ color, className, percentage }) => {
	let size = "0 0 221.2 500"
	if (percentage) {
		size = "0 0 221.2 " + (((100 - percentage) * 500) / 100)
	}
  return (
	<div className={className}>
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox={size} enableBackground="new 0 0 221.2 500" xmlSpace="preserve">
		<g id="Group_2478" transform="translate(0 0)">
<g id="Group_2477">
	<path id="Path_2275" fill={color} d="M157.7,94.8c0,26-21.1,47.1-47.1,47.1c-26,0-47.1-21.1-47.1-47.1s21.1-47.1,47.1-47.1
		c0,0,0,0,0,0C136.6,47.8,157.7,68.8,157.7,94.8z"/>
	<path id="Path_2276" fill={color} d="M215.3,304.6l-36.5-138.7c0-0.1,0-0.1-0.1-0.2c-1.2-6.2-6.6-10.7-12.9-10.7H55.4
		c-6.3,0-11.7,4.5-12.9,10.7c0,0,0,0.1-0.1,0.2L5.9,304.6c-2,7.8,2.6,15.7,10.4,17.8c7.8,2,15.7-2.6,17.8-10.4l29.5-112.2v62.7
		L34.8,371.6h28.7v109.9c0,10.2,8.3,18.5,18.5,18.5s18.5-8.3,18.5-18.5V371.8h20.1v109.7c0,10.2,8.3,18.5,18.5,18.5
		s18.5-8.3,18.5-18.5V371.8h28.7l-28.7-109.1v-62.9L187.2,312c2,7.8,10,12.4,17.8,10.4C212.7,320.3,217.3,312.3,215.3,304.6
		L215.3,304.6z"/>
</g>
</g>
</svg>
</div>
  )
}

export default Female