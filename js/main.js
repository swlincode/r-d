setInterval(function() {
			var progress1_Num = ((Math.random() * 35) + 1);
			var progress2_Num = ((Math.random() * 35) + 1);
			var progress3_Num = ((Math.random() * 35) + 1);
			var progress4_Num = ((Math.random() * 35) + 1);
			var summation = Math.floor(progress1_Num+progress1_Num+progress1_Num+progress1_Num);
	
			document.getElementById('progress_1').style.width = progress1_Num + "%";
			document.getElementById('progress_2').style.width = progress2_Num + "%";
			document.getElementById('progress_3').style.width = progress3_Num + "%";
			document.getElementById('progress_4').style.width = progress4_Num + "%";
			document.getElementById('progress_1_text').innerHTML = Math.floor(progress1_Num) + "篇";
			document.getElementById('progress_2_text').innerHTML = Math.floor(progress2_Num) + "篇";
			document.getElementById('progress_3_text').innerHTML = Math.floor(progress3_Num) + "篇";
			document.getElementById('progress_4_text').innerHTML = Math.floor(progress4_Num) + "篇";
				document.getElementById('autoSum').innerHTML = summation;
        document.getElementById('p4_text_num').innerHTML = Math.floor(progress4_Num);
    
	
			
			}, 3000);

