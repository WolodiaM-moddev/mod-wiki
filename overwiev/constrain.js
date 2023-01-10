/**
 * Constraint height of one object to height of other (has only minimum value)
 *
 * @param      {<string>}  to      To what object heign of <object> need to be constrained
 * @param      {<string>}  object  The object that need to be constained
 */
function constrain_height(to, object)
{
	let elem = document.getElementsByClassName(to);
	let out = document.getElementsByClassName(object);

	let min_height = elem[0].offsetHeight;

	let cur_height = out[0].offsetHeight;

	if (min_height > cur_height)
	{
		out[0].style.height = min_height + "px";
	}
}