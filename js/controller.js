var app=angular.module("angularApp",[])
			.controller("myCtrl",function($scope,$element){
				$scope.shuliang=[3,1,1,1];
				var danjia=[39.9,48,168,79.9];
				$scope.yes="../img/shop_gouwuche/20160627174757_WkrcE.png";
				$scope.no="../img/shop_gouwuche/20160627174700_H38yY.png";
				$scope.select=[$scope.no,$scope.no,$scope.no,$scope.no,$scope.no,$scope.no];
				$scope.total=0;
				$scope.totalStr="￥0.00";
				$scope.jishu=0;
				$scope.dianji=function(bianhao){
					switch(bianhao){
						case 0:
						case 5:
							if($scope.select[0]==$scope.no){
								$scope.total=0;
								$scope.select=[$scope.yes,$scope.yes,$scope.yes,$scope.yes,$scope.yes,$scope.yes];
								$scope.jishu=4;
								for(var i=0;i<$scope.shuliang.length;i++){
									$scope.total+=parseInt($scope.shuliang[i]*danjia[i]*100);
								}
								var totalLength=$scope.total.toString().length;
								$scope.totalStr="￥"+$scope.total.toString().substr(0,totalLength-2)+"."+$scope.total.toString().substr(totalLength-2,totalLength);
							}
							else{
								$scope.select=[$scope.no,$scope.no,$scope.no,$scope.no,$scope.no,$scope.no];
								$scope.jishu=0;
								$scope.total=0;
								$scope.totalStr="￥0.00";
							}
							break;
						case 1:
						case 2:
						case 3:
						case 4:
							if($scope.select[bianhao]==$scope.no){
								$scope.select[bianhao]=$scope.yes;
								$scope.jishu++;
								if($scope.select[1]==$scope.yes&&$scope.select[2]==$scope.yes&&$scope.select[3]==$scope.yes&&$scope.select[4]==$scope.yes){
									$scope.select[0]=$scope.select[5]=$scope.yes;
									console.log(".......")
								}
								$scope.total+=parseInt($scope.shuliang[bianhao-1]*danjia[bianhao-1]*100);
								var totalLength=$scope.total.toString().length;
								$scope.totalStr="￥"+$scope.total.toString().substr(0,totalLength-2)+"."+$scope.total.toString().substr(totalLength-2,totalLength);
							}
							else{
								$scope.select[bianhao]=$scope.select[0]=$scope.select[5]=$scope.no;
								$scope.jishu--;
								$scope.total-=parseInt($scope.shuliang[bianhao-1]*danjia[bianhao-1]*100);
								if($scope.total==0){
									$scope.totalStr="￥0.00";
								}
								else{
									var totalLength=$scope.total.toString().length;
									$scope.totalStr="￥"+$scope.total.toString().substr(0,totalLength-2)+"."+$scope.total.toString().substr(totalLength-2,totalLength)
								}							
							}
							break;
					}
				}
				$scope.add=function(bianhao){
					$scope.shuliang[bianhao]++;
					if($scope.select[bianhao+1]==$scope.yes){
						$scope.total+=parseInt(danjia[bianhao]*100);
						var totalLength=$scope.total.toString().length;
						$scope.totalStr="￥"+$scope.total.toString().substr(0,totalLength-2)+"."+$scope.total.toString().substr(totalLength-2,totalLength);
					}
				}
				$scope.jian=function(bianhao){
					if($scope.shuliang[bianhao]>1){
						$scope.shuliang[bianhao]--;
					}
					if($scope.select[bianhao+1]==$scope.yes){
						$scope.total-=parseInt(danjia[bianhao]*100);
						var totalLength=$scope.total.toString().length;
						$scope.totalStr="￥"+$scope.total.toString().substr(0,totalLength-2)+"."+$scope.total.toString().substr(totalLength-2,totalLength);
					}
				}
			})