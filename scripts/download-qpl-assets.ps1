# Downloads all reusable assets from qpl.com.ph into organized folders.
Add-Type -AssemblyName System.Drawing
$root = "C:\Users\tharraleos\projects\cold-websites\qpl-assets"

# category => list of image URLs
$assets = [ordered]@{
  "brand" = @(
    "https://www.qpl.com.ph/wp-content/uploads/2021/04/logo.png",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/qpl-frontpage.png"
  )
  "plant" = @(
    "https://www.qpl.com.ph/wp-content/uploads/2021/03/qplabout.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/03/plan101.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/03/qmsi.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/03/pepoi.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/03/qpl_1_20160324_1617945723.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/03/pwrplnt_7_20160313_1409956014.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/03/pwrplnt_6_20160313_1482337202.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/03/pwrplnt_5_20160313_1208207462.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/03/pwrplnt_4_20160313_1447751810.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/03/pwrplnt_3_20160313_1232835093.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/03/pwrplnt_1_20160313_1685656438.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/03/powerplant_8_20160311_1181804471.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/03/powerplant_7_20160311_1012006417.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/03/powerplant_6_20160311_1728258815.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/03/powerplant_5_20160311_1585017007.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/03/powerplant_4_20160311_1880997694.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/03/powerplant_3_20160311_1568178484.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/03/powerplant_2_20160311_1441035122.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/03/powerplant_1_20160311_1139917371.jpg"
  )
  "leadership" = @(
    "https://www.qpl.com.ph/wp-content/uploads/2022/05/New-Project-1.png",
    "https://www.qpl.com.ph/wp-content/uploads/2021/03/saengpredekorn-thumb.png",
    "https://www.qpl.com.ph/wp-content/uploads/2021/03/walter-thumb.png"
  )
  "csr-section-headers" = @(
    "https://www.qpl.com.ph/wp-content/uploads/2021/03/education.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/03/health.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/03/livelihood2.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/03/environment.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/03/host2.jpg"
  )
  "news" = @(
    "https://www.qpl.com.ph/wp-content/uploads/2025/05/IMG_2994.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2023/02/qpl2723.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2022/07/faaaa.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/04/amcham.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/04/p1afh6tqpcmd91mqs11j3100papsn.jpg"
  )
  "csr-gallery" = @(
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/feeding_program_2_11_20180327_1813606743.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/feeding_program_2_3_20180327_2032171257.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/feeding_program_1_20160313_1892776387.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/feeding_program_8_20160313_1558253213.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/feeding_program_2_7_20180327_1534378989.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/feeding_program_2_20160313_1333808224.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/feeding_program_9_20160313_1747737794.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/trees_2_20160324_1785965582.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/env_5_20160313_1190541241.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/env_2_20160313_1327886655.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/cat_3_20160311_1759796899.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/cataract_and_pterygium_operation_2_20160312_1930347612.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/cat2b_1_20160314_1437566821.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/cataract_and_pterygium_operation_5_20160312_1293521429.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/tree_planting_8_20160313_1699002821.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/tree_planting_4_20160313_1964675363.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/tree_planting_3_20160313_1810908585.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/tree_planting_2_20160313_1176138021.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/tree_planting_1_20160313_1655845425.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/gift_givi3.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/gift_-3.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/gift_-6.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/gift_-4.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/gift_.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/gift_-5.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/10_million_awarding_12_20180327_1702094455.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/10_million_awarding_6_20180327_1218290653.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/10_million_awarding_16_20180327_1493751948.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/10_million_awarding_17_20180327_1186354071.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/10_million_awarding_9_20180327_1038951309.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/medical_dental_mission_11_20160313_1871173401.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/medical_dental_mission_1_20160313_1420467434.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/medical_dental_mission_16_20160313_1843169083.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/medical_dental_mission_4_20160313_1426258039.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/medical_dental_mission_9_20160313_1384378379.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/medical_dental_mission_15_20160313_1098792424.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/clean_3_20160312_2037544498.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/clean_4_20160312_1200220241.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/clean_1_20160312_1965897441.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/clean_2_20160312_1425813950.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/tree_planting_2017_14_20180326_1288222987.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/tree_planting_2017_4_20180326_2039641389.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/tree_planting_2017_3_20180326_1957776496.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/tree_planting_2017_1_20180326_2087675953.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/tree_planting_2017_13_20180326_2099292503.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/pamaskong-handog_9_20160324_1868149973.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/pamaskong-handog_7_20160324_2004019348.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/pamaskong-handog_11_20160324_1166657701.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/pamaskong-handog_3_20160324_1028895442.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/pamaskong-handog_12_20160324_1735979815.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/2016_christmas_activities_16_20170328_1137010446.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/2016_christmas_activities_11_20170328_1300074082.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/2016_christmas_activities_9_20170328_1931865447.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/2016_christmas_activities_8_20170328_1089944001.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/2016_christmas_activities_22_20170328_1361028131.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/eye_operation_6_20180327_1035143054.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/eye_operation_1_20180327_1605019516.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/eye_operation_10_20180327_1862702857.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/eye_operation_4_20180327_1421140599.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/farm_3_20160313_1705233727.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/farm2b_1_20160314_1606962529.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/farm_7_20160313_1375944983.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/farm_4_20160313_1335649865.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/farm_9_20160313_1912925914.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/farm_10_20160313_1067818497.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/coastal_clean_up_2017_2_20180326_1855379080.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/coastal_clean_up_2017_7_20180326_1017435863.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/coastal_clean_up_2017_5_20180326_1727427529.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/coastal_clean_up_2017_1_20180326_1329401033.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/coastal_clean_up_2017_11_20180326_1814743493.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/coastal_clean_up_2017_3_20180326_1117215393.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/coastal_clean_up_2017_4_20180326_1547276455.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/qpl_community_christmas_party_8_20160324_2069317779.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/qpl_community_christmas_party_2_20160324_1553238647.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/qpl_community_christmas_party_5_20160324_1522032168.jpg",
    "https://www.qpl.com.ph/wp-content/uploads/2021/05/qpl_community_christmas_party_6_20160324_1298276411.jpg"
  )
}

$manifest = @()
foreach ($cat in $assets.Keys) {
  $folder = Join-Path $root $cat
  New-Item -ItemType Directory -Force $folder | Out-Null
  foreach ($u in $assets[$cat]) {
    $name = [IO.Path]::GetFileName($u)
    $dest = Join-Path $folder $name
    try {
      Invoke-WebRequest -Uri $u -OutFile $dest -UseBasicParsing -TimeoutSec 60
      $w = 0; $h = 0
      try { $img = [System.Drawing.Image]::FromFile($dest); $w = $img.Width; $h = $img.Height; $img.Dispose() } catch {}
      $manifest += [pscustomobject]@{ Category=$cat; File=$name; Width=$w; Height=$h; KB=[math]::Round((Get-Item $dest).Length/1KB); Url=$u }
    } catch {
      $manifest += [pscustomobject]@{ Category=$cat; File=$name; Width=-1; Height=-1; KB=0; Url=$u }
      Write-Host "FAILED $u"
    }
  }
}
$manifest | Export-Csv -Path (Join-Path $root "asset-manifest.csv") -NoTypeInformation -Encoding utf8
$ok = ($manifest | Where-Object { $_.Width -gt 0 }).Count
"Downloaded $ok / $($manifest.Count) images into $root"
$manifest | Sort-Object Category | Format-Table Category, File, @{n='Dims';e={"$($_.Width)x$($_.Height)"}}, KB -AutoSize | Out-String -Width 200