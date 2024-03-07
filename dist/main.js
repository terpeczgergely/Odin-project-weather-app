(()=>{let e="Budapest",n=!0;const t=document.getElementById("weather-type"),r=document.getElementById("weather-location"),o=document.getElementById("weather-location-time"),i=document.getElementById("weather-degree"),c=document.getElementById("weather-degree-display"),a=document.getElementById("weather-type-icon"),d=document.getElementById("feelslike-degree"),l=document.getElementById("humidity-percentage"),m=document.getElementById("wind-direction-value"),u=document.getElementById("wind-speed-value"),s=document.getElementById("search-location"),h=document.getElementById("error");async function p(){try{const s=await fetch(`https://api.weatherapi.com/v1/current.json?key=81dee91ab1544b219b0214517240503&q=${e}`,{method:"GET",mode:"cors",headers:{"Content-Type":"application/json"}});if(!e)throw new Error("No location specified");if(!s.ok)throw h.innerHTML="Location was not found!",new Error("Network response was not ok");const p=await s.json();let w=p.current.condition.text;return t.innerHTML=w,r.innerHTML=`${p.location.name}, ${p.location.country}`,o.innerHTML=`${p.location.localtime}`,n?(i.innerHTML=`${p.current.temp_c} C°`,c.innerHTML="Displaying temperature in C° <br> (click on degree to change)",d.innerHTML=`${p.current.feelslike_c} C°`):(i.innerHTML=`${p.current.temp_f} F°`,c.innerHTML="Displaying temperature in F° <br> (click on degree to change)",d.innerHTML=`${p.current.feelslike_f} F°`),a.src=`https:${p.current.condition.icon}`,a.alt=w,l.innerHTML=`${p.current.humidity} %`,m.innerHTML=`${p.current.wind_dir} `,u.innerHTML=`${p.current.wind_kph} km/h`,p}catch(e){throw console.error("There was a problem with the fetch operation:",e),e}}s.addEventListener("blur",(function(){e=this.value,function(e){return!!e}(e)?(h.innerHTML="",p()):(h.innerHTML="Location was not provided!",console.log("Failed to fetch weather, because location is missing"))})),p(),i.addEventListener("click",(()=>{n=!n,p()}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiTUFDQSxJQUFJQSxFQURvQixXQUVwQkMsR0FBWSxFQUNoQixNQUVNQyxFQUFxQkMsU0FBU0MsZUFBZSxnQkFDN0NDLEVBQXlCRixTQUFTQyxlQUFlLG9CQUNqREUsRUFBNkJILFNBQVNDLGVBQWUseUJBQ3JERyxFQUF1QkosU0FBU0MsZUFBZSxrQkFDL0NJLEVBQThCTCxTQUFTQyxlQUFlLDBCQUN0REssRUFBa0JOLFNBQVNDLGVBQWUscUJBQzFDTSxFQUFvQ1AsU0FBU0MsZUFBZSxvQkFDNURPLEVBQW1DUixTQUFTQyxlQUFlLHVCQUMzRFEsRUFBOEJULFNBQVNDLGVBQWUsd0JBQ3REUyxFQUEwQlYsU0FBU0MsZUFBZSxvQkFDbERVLEVBQXdCWCxTQUFTQyxlQUFlLG1CQUNoRFcsRUFBZVosU0FBU0MsZUFBZSxTQWM3Q1ksZUFBZUMsSUFDWCxJQUNFLE1BQU1DLFFBQWlCQyxNQUFNLG9GQUEyRG5CLElBQVksQ0FDbEdvQixPQUFRLE1BQ1JDLEtBQU0sT0FDTkMsUUFBUyxDQUNQLGVBQWdCLHNCQUlwQixJQUFLdEIsRUFDSCxNQUFNLElBQUl1QixNQUFNLHlCQUdsQixJQUFLTCxFQUFTTSxHQUVaLE1BREFULEVBQWFVLFVBQVksMEJBQ25CLElBQUlGLE1BQU0sK0JBR3BCLE1BQU1HLFFBQWFSLEVBQVNTLE9BQzNCLElBQUlDLEVBQWNGLEVBQUtHLFFBQVFDLFVBQVVDLEtBc0J4QyxPQXJCRDdCLEVBQW1CdUIsVUFBWUcsRUFDL0J2QixFQUF1Qm9CLFVBQVksR0FBR0MsRUFBSzFCLFNBQVNnQyxTQUFTTixFQUFLMUIsU0FBU2lDLFVBQzNFM0IsRUFBMkJtQixVQUFZLEdBQUdDLEVBQUsxQixTQUFTa0MsWUFDbkRqQyxHQUtGTSxFQUFxQmtCLFVBQVksR0FBR0MsRUFBS0csUUFBUU0sWUFDakQzQixFQUE0QmlCLFVBQVksZ0VBQ3hDZixFQUFrQ2UsVUFBWSxHQUFHQyxFQUFLRyxRQUFRTyxtQkFOOUQ3QixFQUFxQmtCLFVBQVksR0FBR0MsRUFBS0csUUFBUVEsWUFDakQ3QixFQUE0QmlCLFVBQVksZ0VBQ3hDZixFQUFrQ2UsVUFBWSxHQUFHQyxFQUFLRyxRQUFRUyxrQkFPakU3QixFQUFnQjhCLElBQU0sU0FBU2IsRUFBS0csUUFBUUMsVUFBVVUsT0FDdEQvQixFQUFnQmdDLElBQU1iLEVBQ3RCakIsRUFBaUNjLFVBQVksR0FBR0MsRUFBS0csUUFBUWEsYUFDN0Q5QixFQUE0QmEsVUFBWSxHQUFHQyxFQUFLRyxRQUFRYyxZQUN4RDlCLEVBQXdCWSxVQUFZLEdBQUdDLEVBQUtHLFFBQVFlLGdCQUk1Q2xCLENBQ1QsQ0FBRSxNQUFPbUIsR0FFUCxNQURBQyxRQUFRRCxNQUFNLGdEQUFpREEsR0FDekRBLENBQ1IsQ0FDRixDQTVERi9CLEVBQXNCaUMsaUJBQWlCLFFBQVEsV0FDM0MvQyxFQUFXZ0QsS0FBS0MsTUErRHBCLFNBQTBCakQsR0FDeEIsUUFBS0EsQ0FHUCxDQWpFTWtELENBQWlCbEQsSUFDbkJlLEVBQWFVLFVBQVksR0FDekJSLE1BRUFGLEVBQWFVLFVBQVksNkJBQ3pCcUIsUUFBUUssSUFBSSx3REFHaEIsSUFtREFsQyxJQVFBVixFQUFxQndDLGlCQUFpQixTQUFTLEtBQ1g5QyxHQUEvQkEsRUFDRGdCLEdBQVcsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlcy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBkZWZhdWx0TG9jYXRpb24gPSBcIkJ1ZGFwZXN0XCJcclxubGV0IGxvY2F0aW9uID0gZGVmYXVsdExvY2F0aW9uO1xyXG5sZXQgaXNDZWxzaXVzID0gdHJ1ZTtcclxuY29uc3Qga2V5ID0gXCI4MWRlZTkxYWIxNTQ0YjIxOWIwMjE0NTE3MjQwNTAzXCI7XHJcblxyXG5jb25zdCB3ZWF0aGVyVHlwZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlYXRoZXItdHlwZVwiKTtcclxuY29uc3Qgd2VhdGhlckxvY2F0aW9uRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2VhdGhlci1sb2NhdGlvblwiKTtcclxuY29uc3Qgd2VhdGhlckxvY2F0aW9uVGltZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlYXRoZXItbG9jYXRpb24tdGltZVwiKTtcclxuY29uc3Qgd2VhdGhlckRlZ3JlZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlYXRoZXItZGVncmVlXCIpO1xyXG5jb25zdCB3ZWF0aGVyRGVncmVlRGlzcGxheUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlYXRoZXItZGVncmVlLWRpc3BsYXlcIilcclxuY29uc3Qgd2VhdGhlclR5cGVJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWF0aGVyLXR5cGUtaWNvblwiKTtcclxuY29uc3Qgd2VhdGhlckZlZWxzTGlrZVBlcmNlbnRhZ2VFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmZWVsc2xpa2UtZGVncmVlXCIpO1xyXG5jb25zdCB3ZWF0aGVySHVtaWRpdHlQZXJjZW50YWdlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaHVtaWRpdHktcGVyY2VudGFnZVwiKTtcclxuY29uc3Qgd2VhdGhlcldpbmREaXJlY3Rpb25FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3aW5kLWRpcmVjdGlvbi12YWx1ZVwiKTtcclxuY29uc3Qgd2VhdGhlcldpbmRTcGVlZEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndpbmQtc3BlZWQtdmFsdWVcIik7XHJcbmNvbnN0IHNlYXJjaExvY2F0aW9uRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLWxvY2F0aW9uXCIpXHJcbmNvbnN0IGVycm9yRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJyb3JcIilcclxuc2VhcmNoTG9jYXRpb25FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBmdW5jdGlvbigpIHtcclxuICAgIGxvY2F0aW9uID0gdGhpcy52YWx1ZVxyXG5cclxuICBpZiAodmFsaWRhdGVMb2NhdGlvbihsb2NhdGlvbikpIHtcclxuICAgIGVycm9yRWxlbWVudC5pbm5lckhUTUwgPSBcIlwiXHJcbiAgICBmZXRjaERhdGEobG9jYXRpb24pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBlcnJvckVsZW1lbnQuaW5uZXJIVE1MID0gXCJMb2NhdGlvbiB3YXMgbm90IHByb3ZpZGVkIVwiXHJcbiAgICBjb25zb2xlLmxvZyhcIkZhaWxlZCB0byBmZXRjaCB3ZWF0aGVyLCBiZWNhdXNlIGxvY2F0aW9uIGlzIG1pc3NpbmdcIilcclxuICB9XHJcbiAgXHJcbn0pO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT0ke2tleX0mcT0ke2xvY2F0aW9ufWAsIHtcclxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgIG1vZGU6ICdjb3JzJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgXHJcbiAgICAgIGlmICghbG9jYXRpb24pIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGxvY2F0aW9uIHNwZWNpZmllZCcpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgZXJyb3JFbGVtZW50LmlubmVySFRNTCA9IFwiTG9jYXRpb24gd2FzIG5vdCBmb3VuZCFcIlxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTmV0d29yayByZXNwb25zZSB3YXMgbm90IG9rJyk7XHJcbiAgICAgIH1cclxuICBcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgbGV0IHdlYXRoZXJUeXBlID0gZGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0O1xyXG4gICAgIHdlYXRoZXJUeXBlRWxlbWVudC5pbm5lckhUTUwgPSB3ZWF0aGVyVHlwZTtcclxuICAgICB3ZWF0aGVyTG9jYXRpb25FbGVtZW50LmlubmVySFRNTCA9IGAke2RhdGEubG9jYXRpb24ubmFtZX0sICR7ZGF0YS5sb2NhdGlvbi5jb3VudHJ5fWA7XHJcbiAgICAgd2VhdGhlckxvY2F0aW9uVGltZUVsZW1lbnQuaW5uZXJIVE1MID0gYCR7ZGF0YS5sb2NhdGlvbi5sb2NhbHRpbWV9YFxyXG4gICAgIGlmICghaXNDZWxzaXVzKXsgXHJcbiAgICAgICAgd2VhdGhlckRlZ3JlZUVsZW1lbnQuaW5uZXJIVE1MID0gYCR7ZGF0YS5jdXJyZW50LnRlbXBfZn0gRsKwYFxyXG4gICAgICAgIHdlYXRoZXJEZWdyZWVEaXNwbGF5RWxlbWVudC5pbm5lckhUTUwgPSBgRGlzcGxheWluZyB0ZW1wZXJhdHVyZSBpbiBGwrAgPGJyPiAoY2xpY2sgb24gZGVncmVlIHRvIGNoYW5nZSlgXHJcbiAgICAgICAgd2VhdGhlckZlZWxzTGlrZVBlcmNlbnRhZ2VFbGVtZW50LmlubmVySFRNTCA9IGAke2RhdGEuY3VycmVudC5mZWVsc2xpa2VfZn0gRsKwYFxyXG4gICAgIH0gZWxzZSB7XHJcbiAgICAgICAgd2VhdGhlckRlZ3JlZUVsZW1lbnQuaW5uZXJIVE1MID0gYCR7ZGF0YS5jdXJyZW50LnRlbXBfY30gQ8KwYFxyXG4gICAgICAgIHdlYXRoZXJEZWdyZWVEaXNwbGF5RWxlbWVudC5pbm5lckhUTUwgPSBcIkRpc3BsYXlpbmcgdGVtcGVyYXR1cmUgaW4gQ8KwIDxicj4gKGNsaWNrIG9uIGRlZ3JlZSB0byBjaGFuZ2UpXCJcclxuICAgICAgICB3ZWF0aGVyRmVlbHNMaWtlUGVyY2VudGFnZUVsZW1lbnQuaW5uZXJIVE1MID0gYCR7ZGF0YS5jdXJyZW50LmZlZWxzbGlrZV9jfSBDwrBgXHJcbiAgICAgfVxyXG4gICAgIFxyXG4gICAgIHdlYXRoZXJUeXBlSWNvbi5zcmMgPSBgaHR0cHM6JHtkYXRhLmN1cnJlbnQuY29uZGl0aW9uLmljb259YFxyXG4gICAgIHdlYXRoZXJUeXBlSWNvbi5hbHQgPSB3ZWF0aGVyVHlwZVxyXG4gICAgIHdlYXRoZXJIdW1pZGl0eVBlcmNlbnRhZ2VFbGVtZW50LmlubmVySFRNTCA9IGAke2RhdGEuY3VycmVudC5odW1pZGl0eX0gJWBcclxuICAgICB3ZWF0aGVyV2luZERpcmVjdGlvbkVsZW1lbnQuaW5uZXJIVE1MID0gYCR7ZGF0YS5jdXJyZW50LndpbmRfZGlyfSBgXHJcbiAgICAgd2VhdGhlcldpbmRTcGVlZEVsZW1lbnQuaW5uZXJIVE1MID0gYCR7ZGF0YS5jdXJyZW50LndpbmRfa3BofSBrbS9oYCAgXHJcbiAgICAgIC8vIFByb2Nlc3MgdGhlIEpTT04gZGF0YVxyXG4gICAgICAvL2NvbnNvbGUubG9nKGRhdGEpO1xyXG4gIFxyXG4gICAgICByZXR1cm4gZGF0YTsgLy8gUmV0dXJuIHRoZSBmZXRjaGVkIGRhdGFcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZXJlIHdhcyBhIHByb2JsZW0gd2l0aCB0aGUgZmV0Y2ggb3BlcmF0aW9uOicsIGVycm9yKTtcclxuICAgICAgdGhyb3cgZXJyb3I7IC8vIFJlLXRocm93IHRoZSBlcnJvciB0byBwcm9wYWdhdGUgaXQgZnVydGhlciBpZiBuZWVkZWRcclxuICAgIH1cclxuICB9XHJcblxyXG5mZXRjaERhdGEoKVxyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVMb2NhdGlvbihsb2NhdGlvbil7XHJcbiAgaWYgKCFsb2NhdGlvbikge1xyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfSBlbHNlIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG53ZWF0aGVyRGVncmVlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xyXG4gICAgIWlzQ2Vsc2l1cyA/IGlzQ2Vsc2l1cyA9IHRydWUgOiBpc0NlbHNpdXMgPSBmYWxzZTtcclxuICAgIGZldGNoRGF0YSgpO1xyXG59KVxyXG5cclxuIl0sIm5hbWVzIjpbImxvY2F0aW9uIiwiaXNDZWxzaXVzIiwid2VhdGhlclR5cGVFbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIndlYXRoZXJMb2NhdGlvbkVsZW1lbnQiLCJ3ZWF0aGVyTG9jYXRpb25UaW1lRWxlbWVudCIsIndlYXRoZXJEZWdyZWVFbGVtZW50Iiwid2VhdGhlckRlZ3JlZURpc3BsYXlFbGVtZW50Iiwid2VhdGhlclR5cGVJY29uIiwid2VhdGhlckZlZWxzTGlrZVBlcmNlbnRhZ2VFbGVtZW50Iiwid2VhdGhlckh1bWlkaXR5UGVyY2VudGFnZUVsZW1lbnQiLCJ3ZWF0aGVyV2luZERpcmVjdGlvbkVsZW1lbnQiLCJ3ZWF0aGVyV2luZFNwZWVkRWxlbWVudCIsInNlYXJjaExvY2F0aW9uRWxlbWVudCIsImVycm9yRWxlbWVudCIsImFzeW5jIiwiZmV0Y2hEYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsIm1vZGUiLCJoZWFkZXJzIiwiRXJyb3IiLCJvayIsImlubmVySFRNTCIsImRhdGEiLCJqc29uIiwid2VhdGhlclR5cGUiLCJjdXJyZW50IiwiY29uZGl0aW9uIiwidGV4dCIsIm5hbWUiLCJjb3VudHJ5IiwibG9jYWx0aW1lIiwidGVtcF9jIiwiZmVlbHNsaWtlX2MiLCJ0ZW1wX2YiLCJmZWVsc2xpa2VfZiIsInNyYyIsImljb24iLCJhbHQiLCJodW1pZGl0eSIsIndpbmRfZGlyIiwid2luZF9rcGgiLCJlcnJvciIsImNvbnNvbGUiLCJhZGRFdmVudExpc3RlbmVyIiwidGhpcyIsInZhbHVlIiwidmFsaWRhdGVMb2NhdGlvbiIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=